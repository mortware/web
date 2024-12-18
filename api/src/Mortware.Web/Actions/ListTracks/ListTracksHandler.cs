using MediatR;
using Microsoft.EntityFrameworkCore;
using Mortware.Web.Data;
using Mortware.Web.Data.Models;

namespace Mortware.Web.Actions.ListTracks;

public class ListTracksHandler(CosmosDbContext context) : IRequestHandler<ListTracksRequest, IEnumerable<Track>>
{
    public async Task<IEnumerable<Track>> Handle(ListTracksRequest request, CancellationToken cancellationToken)
    {
        var query = context.Tracks
            .IgnoreAutoIncludes()
            .AsQueryable();

        if (request.Tempo.HasValue)
        {
            query = query.Where(t => t.Tempo != null && Convert.ToInt32(t.Tempo.Bpm) == Convert.ToInt32(request.Tempo));
        }

        if (request.TempoVariable.HasValue)
        {
            query = query.Where(t => t.Tempo != null && t.Tempo.Variable == request.TempoVariable);
        }

        if (!string.IsNullOrWhiteSpace(request.SongKey))
        {
            query = query.Where(t => t.SongKey == request.SongKey);
        }

        if (!string.IsNullOrWhiteSpace(request.Filter))
        {
            query = query.Where(t => t.Slug.Contains(request.Filter));
        }

        query = query.OrderBy(t => t.Slug);

        query = query.Take(Math.Min(100, request.First ?? 100));

        return await query
            .ToListAsync(cancellationToken);
    }
}