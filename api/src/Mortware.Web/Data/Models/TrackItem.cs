using System.Text.Json.Serialization;

namespace Mortware.Web.Data.Models;

public abstract class TrackItem
{
    public Guid Id { get; init; }
    public required string Name { get; init; }
    public required string Slug { get; init; }
    public abstract string Type { get; }
    [JsonIgnore] public string Filename { get; init; } = string.Empty;
}