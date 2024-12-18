using MediatR;
using Microsoft.EntityFrameworkCore;
using Mortware.Web.Data;
using Mortware.Web.Data.Models;

namespace Mortware.Web.Actions.GetTrack;

public class GetTrackHandler(CosmosDbContext context) : IRequestHandler<GetTrackRequest, Track?>
{
    public async Task<Track?> Handle(GetTrackRequest request, CancellationToken cancellationToken)
    {
        var track = await context.Tracks.Where(t => t.Slug == request.Slug)
            .FirstOrDefaultAsync(cancellationToken);
        return track;
    }
}