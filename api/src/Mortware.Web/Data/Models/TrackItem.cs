using System.Text.Json.Serialization;

namespace Mortware.Web.Data.Models;

public abstract class TrackItem
{
    public Guid Id { get; init; }
    public required string Name { get; init; }
    public required string Slug { get; init; }
    public abstract string Type { get; }
    public DateTime? Created { get; init; }
    public DateTime? Updated { get; init; }
    [JsonIgnore] public string? BlobName { get; init; }
    [JsonIgnore] public DateTime? BlobCreated { get; init; }
}