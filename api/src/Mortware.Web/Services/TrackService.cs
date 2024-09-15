using Azure;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using Mortware.Web.Data;
using Mortware.Web.Data.Models;
using Mortware.Web.Requests;
using Mortware.Web.Responses;

namespace Mortware.Web.Services;

public class TrackService(MusicDbContext dbContext, BlobServiceClient blobServiceClient) : ITrackService
{
    private const long MaxBufferSize = 1_048_576; // 1MB
    private const string BlobContainerName = "tracks";
    private const string FullMixSlugName = "full-mix";
    public const string TrackNotFoundMessage = "Track not found";
    public const string MixNotFoundMessage = "Mix not found";
    public const string StemNotFoundMessage = "Stem not found";
    public const string BlobNotFoundMessage = "Blob not found";

    public async Task<Track?> GetTrack(Guid id)
    {
        var track = await dbContext
            .Tracks
            .Include(s => s.Mixes).AsSplitQuery()
            .Include(s => s.Stems).AsSplitQuery()
            .AsNoTracking()
            .FirstOrDefaultAsync(s => s.Id == id);

        if (track?.Mixes is null) return track;

        track.FullMix = track.Mixes.FirstOrDefault(m => m.Slug == FullMixSlugName);
        track.Mixes = track.Mixes.Where(m => m.Slug != FullMixSlugName);

        return track;
    }

    public async Task<CollectionResponse<Track>> ListTracks(ListTracksRequest request)
    {
        var query = dbContext
            .Tracks
            .AsNoTracking();

        var totalCount = await query.CountAsync();

        if (!string.IsNullOrWhiteSpace(request.Filter))
        {
            query = query.Where(s => s.Artist.Contains(request.Filter) || s.Title.Contains(request.Filter));
        }

        if (request.Tempo.HasValue)
        {
            query = query.Where(s => s.Tempo == request.Tempo);
        }

        if (request.TempoVariable.HasValue)
        {
            query = query.Where(s => s.TempoVariable == request.TempoVariable);
        }

        if (!string.IsNullOrWhiteSpace(request.SongKey))
        {
            query = query.Where(s => s.SongKey == request.SongKey);
        }

        var items = await query
            .OrderBy(s => s.Artist)
            .Take(request.First ?? 100)
            .ToListAsync();

        return new CollectionResponse<Track>
        {
            Value = items,
            Count = items.Count,
            TotalCount = totalCount
        };
    }

    public async Task<Stream> DownloadStem(Guid trackId, Guid stemId, CancellationToken cancellationToken)
    {
        var track = await dbContext
            .Tracks
            .Include(t => t.Stems).AsSplitQuery()
            .SingleAsync(t => t.Id == trackId, cancellationToken);
        if (track is null) throw new InvalidOperationException(TrackNotFoundMessage);

        var stem = track.Stems?.FirstOrDefault(s => s.Id == stemId);
        if (stem is null || string.IsNullOrWhiteSpace(stem.BlobName)) throw new InvalidOperationException(StemNotFoundMessage);

        return await GetBlob(stem.BlobName, cancellationToken);
    }

    public async Task<TrackFileStream> GetStemStream(Guid trackId, Guid stemId, string? range, CancellationToken cancellationToken)
    {
        var track = await GetTrack(trackId);
        if (track is null) throw new InvalidOperationException(TrackNotFoundMessage);

        var stem = track.Stems?.Single(s => s.Id == stemId);
        if (stem is null || string.IsNullOrWhiteSpace(stem.BlobName)) throw new InvalidOperationException(StemNotFoundMessage);

        return await GetStream(stem.BlobName, range, cancellationToken);
    }

    public async Task<Stream> DownloadMix(Guid trackId, Guid mixId, CancellationToken cancellationToken)
    {
        var track = await dbContext
            .Tracks
            .Include(t => t.Mixes).AsSplitQuery()
            .SingleAsync(t => t.Id == trackId, cancellationToken);
        if (track is null) throw new InvalidOperationException(TrackNotFoundMessage);

        var mix = track.Mixes?.FirstOrDefault(s => s.Id == mixId);
        if (mix is null || string.IsNullOrWhiteSpace(mix.BlobName)) throw new InvalidOperationException(MixNotFoundMessage);

        return await GetBlob(mix.BlobName, cancellationToken);
    }

    public async Task<TrackFileStream> GetMixStream(Guid trackId, Guid mixId, string? range, CancellationToken cancellationToken)
    {
        var track = await GetTrack(trackId);
        if (track is null) throw new InvalidOperationException(TrackNotFoundMessage);

        var mix = track.Mixes?.FirstOrDefault(s => s.Id == mixId);
        if (mix is null || string.IsNullOrWhiteSpace(mix.BlobName)) throw new InvalidOperationException(MixNotFoundMessage);

        return await GetStream(mix.BlobName, range, cancellationToken);
    }

    private async Task<Stream> GetBlob(string blobName, CancellationToken cancellationToken)
    {
        var containerClient = blobServiceClient.GetBlobContainerClient(BlobContainerName);
        var blobClient = containerClient.GetBlobClient(blobName);
        if (!await blobClient.ExistsAsync(cancellationToken))
        {
            throw new InvalidOperationException(BlobNotFoundMessage);
        }

        return await blobClient.OpenReadAsync(cancellationToken: cancellationToken);
    }

    private async Task<TrackFileStream> GetStream(string blobName, string? range, CancellationToken cancellationToken)
    {
        var containerClient = blobServiceClient.GetBlobContainerClient(BlobContainerName);
        var blobClient = containerClient.GetBlobClient(blobName);
        if (!await blobClient.ExistsAsync(cancellationToken))
        {
            throw new InvalidOperationException(BlobNotFoundMessage);
        }

        var blobProperties = await blobClient.GetPropertiesAsync(cancellationToken: cancellationToken);
        var fileSize = blobProperties.Value.ContentLength;

        var httpRange = GetRange(range, fileSize);
        var response = await blobClient.DownloadStreamingAsync(new BlobDownloadOptions { Range = httpRange }, cancellationToken);

        var actualLength = response.Value.Details.ContentLength;

        return new TrackFileStream
        {
            Length = actualLength,
            Start = httpRange.Offset,
            Stream = response.Value.Content,
            TotalLength = fileSize
        };
    }

    private static HttpRange GetRange(string? range, long fileSize)
    {
        if (string.IsNullOrEmpty(range))
        {
            range = "bytes=0-";
        }

        var ranges = range.Replace("bytes=", string.Empty).Split('-');
        var start = string.IsNullOrEmpty(ranges[0]) ? 0 : long.Parse(ranges[0]);
        var end = ranges.Length > 1 && !string.IsNullOrEmpty(ranges[1])
            ? Convert.ToInt64(ranges[1])
            : fileSize - 1;

        var length = end - start + 1;

        if (length > MaxBufferSize)
        {
            length = MaxBufferSize;
        }

        return new HttpRange(start, start + length - 1);
    }
}

public interface ITrackService
{
    Task<Track?> GetTrack(Guid id);
    Task<CollectionResponse<Track>> ListTracks(ListTracksRequest request);

    Task<Stream> DownloadStem(Guid trackId, Guid stemId, CancellationToken cancellationToken);
    Task<Stream> DownloadMix(Guid trackId, Guid mixId, CancellationToken cancellationToken);
    Task<TrackFileStream> GetStemStream(Guid trackId, Guid stemId, string? range, CancellationToken cancellationToken);
    Task<TrackFileStream> GetMixStream(Guid trackId, Guid mixId, string? range, CancellationToken cancellationToken);
}