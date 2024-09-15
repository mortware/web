using System.Text.Json.Serialization;

namespace Mortware.Web.Data.Models;

public class Stem : TrackItem
{
    public override string Type => "Stem";
    public string Color { get; init; } = string.Empty;
    public int Order { get; init; }
}