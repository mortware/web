using Microsoft.AspNetCore.Mvc;

namespace Mortware.Web.Requests;

public class ListTracksRequest
{
    public int? First { get; set; }
    public string? Filter { get; set; }
    public decimal? Tempo { get; set; }
    public bool? TempoVariable { get; set; }
    public string? SongKey { get; set; }
}