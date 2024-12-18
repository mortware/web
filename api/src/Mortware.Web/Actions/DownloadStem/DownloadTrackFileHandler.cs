using Azure.Storage.Blobs;
using MediatR;

namespace Mortware.Web.Actions.DownloadStem;

public class DownloadTrackFileHandler(BlobServiceClient blobServiceClient) : IRequestHandler<DownloadTrackFileRequest, IResult>
{
    private const string BlobContainerName = "tracks";

    public async Task<IResult> Handle(DownloadTrackFileRequest request, CancellationToken cancellationToken)
    {
        var filename = request.Slug + ".mp3"; 
        
        var blobName = $"{request.Track}/{filename}";
        var containerClient = blobServiceClient.GetBlobContainerClient(BlobContainerName);
        var blobClient = containerClient.GetBlobClient(blobName);

        if (!await blobClient.ExistsAsync(cancellationToken))
        {
            return Results.NotFound($"The requested track file '{request.Slug}' was not found.");
        }

        // Download the blob as a stream
        var downloadInfo = await blobClient.DownloadStreamingAsync(cancellationToken: cancellationToken);

        // Stream the blob directly to the client
        return Results.Stream(
            downloadInfo.Value.Content, 
            contentType: "application/octet-stream", 
            fileDownloadName: filename);
    }
}