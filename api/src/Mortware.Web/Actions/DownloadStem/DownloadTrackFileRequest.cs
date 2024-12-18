using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Mortware.Web.Actions.DownloadStem;

public record DownloadTrackFileRequest(string Track, string Slug) : IRequest<IResult>;