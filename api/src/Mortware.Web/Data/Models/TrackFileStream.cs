namespace Mortware.Web.Data.Models;

public class TrackFileStream
{
    public string Name { get; init; } = string.Empty;
    public Stream Stream { get; init; } = Stream.Null;
    public long TotalLength { get; init; }
    public long? Length { get; init; }
    public long Start { get; init; }
}