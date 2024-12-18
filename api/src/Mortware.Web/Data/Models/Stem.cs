using System.Text.Json.Serialization;

namespace Mortware.Web.Data.Models;

public class Stem
{
    public required string Name { get; init; }
    public required string Slug { get; init; }
    public string Color { get; init; } = string.Empty;
    public int Order { get; init; }
}