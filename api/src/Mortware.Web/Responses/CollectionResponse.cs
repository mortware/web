namespace Mortware.Web.Responses;

public class CollectionResponse<T> where T : class
{
    public int TotalCount { get; set; }
    public int Count { get; set; }
    public IEnumerable<T> Value { get; set; } = Enumerable.Empty<T>();
}