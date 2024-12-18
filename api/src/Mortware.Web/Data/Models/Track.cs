using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace Mortware.Web.Data.Models;

public class Track
{
    public string Id { get; init; } = default!;
    public string Artist { get; init; } = default!;
    public string Slug { get; init; } = default!;

    [JsonPropertyName("title")]
    [GraphQLNonNullType]
    public string? Title { get; set; } = default!;

    public Source? Source { get; init; }
    public Tempo? Tempo { get; init; }
    public string? Duration { get; init; }

    public string? SongKey { get; init; }

    public Mix? FullMix { get; set; }
    public DateTime Created { get; init; }
    public DateTime? Updated { get; init; }
    public IEnumerable<Stem>? Stems { get; init; }
    public IEnumerable<Mix>? Mixes { get; set; }
}