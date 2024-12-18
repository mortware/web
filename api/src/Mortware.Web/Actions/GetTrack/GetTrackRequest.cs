using MediatR;
using Mortware.Web.Data.Models;

namespace Mortware.Web.Actions.GetTrack;

public class GetTrackRequest : IRequest<Track?>
{
    public string Slug { get; set; }
}