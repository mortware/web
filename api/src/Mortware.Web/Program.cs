using System.Security.Claims;
using System.Text.Json.Serialization;
using Azure.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Azure;
using Microsoft.IdentityModel.Tokens;
using Mortware.Web.Auth;
using Mortware.Web.Data;
using Mortware.Web.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.Configure<JsonOptions>(o => { o.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull; });

builder.Configuration.AddJsonFile(builder.Environment.IsDevelopment() ? "appsettings.development.json" : "appsettings.json");
builder.Configuration.AddEnvironmentVariables();

var databaseConnectionString = builder.Configuration.GetConnectionString("AzureSql")!;
var blobStorageUri = builder.Configuration["Azure:BlobStorageUri"]!;
var auth0Domain = builder.Configuration["Auth0:Domain"]!;
var auth0Audience = builder.Configuration["Auth0:Audience"]!;

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

builder.Services.AddDbContext<MusicDbContext>(o => o.UseSqlServer(databaseConnectionString));
builder.Services.AddScoped<ITrackService, TrackService>();
builder.Services.AddAzureClients(clientBuilder =>
{
    clientBuilder.AddBlobServiceClient(new Uri(blobStorageUri));
    clientBuilder.UseCredential(new DefaultAzureCredential());
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
    //.AllowAnyOrigin()
    .WithOrigins("http://localhost:3000")
    .AllowAnyHeader()
    .AllowAnyMethod());
app.UseHttpsRedirection();
app.UseRouting();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseAuthentication();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapFallbackToFile("index.html");
});

await app.RunAsync();