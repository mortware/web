using System.Net;
using MediatR;
using Mortware.Web.Responses;

namespace Mortware.Web.Extensions;

public static class EndpointRouteBuilderExtensions
{
    public static RouteHandlerBuilder MapGet<TRequest>(
        this IEndpointRouteBuilder endpoints,
        string pattern)
        where TRequest : IBaseRequest
    {
        return endpoints.MapGet(pattern,
            async (IMediator mediator, CancellationToken token, [AsParameters] TRequest request) =>
                {
                    var result = await mediator.Send(request, token);
                    return result;
                })
                .Produces<ErrorResponse>((int)HttpStatusCode.NotFound)
                .Produces<ErrorResponse>((int)HttpStatusCode.BadRequest)
                .Produces<ErrorResponse>((int)HttpStatusCode.Unauthorized)
                .Produces<ErrorResponse>((int)HttpStatusCode.InternalServerError);
    }
}