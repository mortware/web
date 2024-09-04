using System.Text.Json.Serialization;

namespace Mortware.Web.Data.Models;

public class Stem : TrackItem
{
    public override string Type => "Stem";

    public required string Color { get; init; }
    public int Order { get; init; }
}