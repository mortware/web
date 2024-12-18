using MediatR;
using Mortware.Web.Data.Models;

namespace Mortware.Web.Actions.ListTracks;

public class ListTracksRequest : IRequest<IEnumerable<Track>>
{
    public int? First { get; set; }
    public string? Filter { get; set; }
    public double? Tempo { get; set; }
    public bool? TempoVariable { get; set; }
    public string? SongKey { get; set; }
}