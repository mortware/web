using System.Security.Claims;
using System.Text.Json.Serialization;
using Azure.Identity;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Azure;
using Microsoft.IdentityModel.Tokens;
using Mortware.Web.Actions.DownloadStem;
using Mortware.Web.Actions.GetTrack;
using Mortware.Web.Actions.ListTracks;
using Mortware.Web.Auth;
using Mortware.Web.Data;
using Mortware.Web.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<Program>());
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.Configure<JsonOptions>(o => { o.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull; });


builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
builder.Configuration.AddEnvironmentVariables();

var auth0Domain = builder.Configuration["Auth0:Domain"]!;
var auth0Audience = builder.Configuration["Auth0:Audience"]!;
var cosmosUri = builder.Configuration["Azure:CosmosUri"]!;

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o =>
    {
        o.Authority = auth0Domain;
        o.RequireHttpsMetadata = !builder.Environment.IsDevelopment();
        o.Audience = auth0Audience;
        o.TokenValidationParameters = new TokenValidationParameters
        {
            NameClaimType = ClaimTypes.NameIdentifier
        };
    });

builder.Services.AddAuthorizationBuilder()
    .AddPolicy("read:tracks", p => p.Requirements.Add(new HasScopeRequirement("read:tracks", auth0Domain)))
    .AddPolicy("manage:tracks", p => p.Requirements.Add(new HasScopeRequirement("manage:tracks", auth0Domain)));

builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

var credential = new DefaultAzureCredential();
builder.Services.AddDbContext<CosmosDbContext>(options =>
    options.UseCosmos(cosmosUri, credential, "kvd", o =>
    {
        //o.ContentResponseOnWriteEnabled()
    }).UseCamelCaseNamingConvention()
);

builder.Services.AddAzureClients(clientBuilder =>
{
    clientBuilder.AddBlobServiceClient(new Uri(builder.Configuration["Azure:BlobStorageUri"]!));
    clientBuilder.AddQueueServiceClient(new Uri(builder.Configuration["Azure:QueueStorageUri"]!));
    clientBuilder.UseCredential(credential);
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.Use(async (context, next) =>
{
    Console.WriteLine($"Request: {context.Request.Path}");
    await next.Invoke();
});

app.UseCors(policy => policy
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod());
app.UseHttpsRedirection();
app.UseRouting();
app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet<DownloadTrackFileRequest>("api/track/{track}/{slug}/download")
    .RequireAuthorization("read:tracks");
app.MapGet<ListTracksRequest>("api/tracks")
    .RequireAuthorization("read:tracks");
app.MapGet<GetTrackRequest>("api/track/{slug}")
    .RequireAuthorization("read:tracks");

app.UseAuthentication();
app.UseAuthorization();
app.MapFallbackToFile("index.html");

await app.RunAsync();