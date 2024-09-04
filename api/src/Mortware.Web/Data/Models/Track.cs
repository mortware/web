using System.Text.Json.Serialization;

namespace Mortware.Web.Data.Models;

public class Track
{
    public Guid Id { get; init; }
    public required string Artist { get; init; }
    public required string Slug { get; init; }
    public required string Title { get; init; }
    public required string SourceUrl { get; init; }
    [JsonIgnore] public string SourceUser { get; init; } = string.Empty;
    public decimal Tempo { get; init; }
    public bool TempoVariable { get; init; }
    public required string Duration { get; init; }
    public required string SongKey { get; init; }

    public Mix? FullMix { get; set; }

    public IEnumerable<Stem>? Stems { get; init; }
    public IEnumerable<Mix>? Mixes { get; set; }
}