using Microsoft.AspNetCore.Mvc;

namespace Mortware.Web.Responses;

public class ErrorResponse
{
    public List<string> Errors { get; set; } = new();

    public void AddError(string error)
    {
        Errors.Add(error);
    }

    public void AddErrors(IEnumerable<string> errors)
    {
        Errors.AddRange(errors);
    }

    public ProblemDetails AsProblemDetails()
    {
        return new ProblemDetails
        {
            Title = "One or more errors occurred.",
            Status = 400,
            Detail = string.Join(Environment.NewLine, Errors),
            Type = "https://httpstatuses.com/400"
        };
    }
}