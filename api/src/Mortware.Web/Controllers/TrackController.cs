using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Mortware.Web.Data.Models;
using Mortware.Web.Services;

namespace Mortware.Web.Controllers;

[ApiController]
[Route("api")]
[Authorize("read:tracks")]
public class TrackController(ITrackService trackService) : ControllerBase
{
    [HttpGet("tracks")]
    public async Task<IActionResult> ListTracks([FromQuery] int? first = null, [FromQuery] string? filter = null, [FromQuery] decimal? tempo = null, [FromQuery] bool? tempoVariable = null, [FromQuery] string? songKey = null)
    {
        var tracks = await trackService.ListTracks(first, filter, tempo, tempoVariable, songKey);
        return Ok(tracks);
    }

    [HttpGet("track/{id:guid}")]
    public async Task<IActionResult> GetTrack([FromRoute] Guid id)
    {
        var track = await trackService.GetTrack(id);
        if (track == null)
        {
            return NotFound();
        }

        return Ok(track);
    }

    [HttpGet("track/{trackId:guid}/stem/{stemId:guid}/download")]
    public async Task<IActionResult> DownloadStem([FromRoute] Guid trackId, [FromRoute] Guid stemId, CancellationToken cancellationToken)
    {
        var stream = await trackService.DownloadStem(trackId, stemId, cancellationToken);
        return File(stream, "audio/mpeg");
    }

    [HttpGet("track/{trackId:guid}/stem/{stemId:guid}/stream")]
    public async Task<IActionResult> GetStemStream([FromRoute] Guid trackId, [FromRoute] Guid stemId, [FromHeader] string? range, CancellationToken cancellationToken)
    {
        var trackStream = await trackService.GetStemStream(trackId, stemId, range, cancellationToken);
        return GetFileStreamResult(trackStream);
    }

    [HttpGet("track/{trackId:guid}/mix/{mixId:guid}/download")]
    public async Task<IActionResult> DownloadMix([FromRoute] Guid trackId, [FromRoute] Guid mixId, [FromHeader] string? range, CancellationToken cancellationToken)
    {
        var stream = await trackService.DownloadMix(trackId, mixId, cancellationToken);
        return File(stream, "audio/mpeg");
    }

    [HttpGet("track/{trackId:guid}/mix/{mixId:guid}/stream")]
    public async Task<IActionResult> GetMixStream([FromRoute] Guid trackId, [FromRoute] Guid mixId, [FromHeader] string? range, CancellationToken cancellationToken)
    {
        var trackStream = await trackService.GetMixStream(trackId, mixId, range, cancellationToken);
        return GetFileStreamResult(trackStream);
    }

    private FileStreamResult GetFileStreamResult(TrackFileStream trackStream)
    {
        Response.StatusCode = (int)HttpStatusCode.PartialContent; //206
        Response.Headers.Append("Content-Range", $"bytes {trackStream.Start}-{trackStream.Start + trackStream.Length - 1}/{trackStream.TotalLength}");
        Response.Headers.Append("Accept-Ranges", "bytes");
        Response.Headers.Append("Content-Length", trackStream.Length.ToString());
        return new FileStreamResult(trackStream.Stream, "audio/mpeg");
    }
}