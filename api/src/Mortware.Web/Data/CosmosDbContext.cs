using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Mortware.Web.Data.Models;

namespace Mortware.Web.Data;

public class CosmosDbContext : DbContext
{
    public DbSet<Track> Tracks { get; set; } = default!;

    public CosmosDbContext(DbContextOptions<CosmosDbContext> options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseCamelCaseNamingConvention();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Track>()
            .ToContainer("tracks")
            .HasNoDiscriminator();

        modelBuilder.Entity<Track>()
            .OwnsOne(t => t.Source, source =>
            {
                source.ToJsonProperty("source");
                source.Property(m => m.Id).ToJsonProperty("id");
                source.Property(m => m.Users).ToJsonProperty("users");
                source.Property(m => m.Url).ToJsonProperty("url");
            });

        modelBuilder.Entity<Track>()
            .OwnsOne(t => t.Tempo, tempo =>
            {
                tempo.ToJsonProperty("tempo");
                tempo.Property(t => t.Bpm).ToJsonProperty("bpm");
                tempo.Property(t => t.Variable).ToJsonProperty("variable");
            });

        modelBuilder.Entity<Track>()
            .OwnsOne(t => t.FullMix, fm =>
            {
                fm.ToJsonProperty("fullMix");
                fm.Property(m => m.Name).ToJsonProperty("name");
                fm.Property(m => m.Slug).ToJsonProperty("slug");
            });

        modelBuilder.Entity<Track>()
            .OwnsMany(t => t.Mixes, mix =>
            {
                mix.ToJsonProperty("mixes");
                mix.Property(m => m.Name).ToJsonProperty("name");
                mix.Property(m => m.Slug).ToJsonProperty("slug");
            });

        modelBuilder.Entity<Track>()
            .OwnsMany(t => t.Stems, stem =>
            {
                stem.ToJsonProperty("stems");
                stem.Property(s => s.Name).ToJsonProperty("name");
                stem.Property(s => s.Slug).ToJsonProperty("slug");
                stem.Property(s => s.Color).ToJsonProperty("color");
                stem.Property(s => s.Order).ToJsonProperty("order");
            });

        modelBuilder.Entity<Track>()
            .HasPartitionKey(t => t.Slug);

        modelBuilder.Entity<Track>()
            .Property(t => t.Id).ToJsonProperty("id");
        modelBuilder.Entity<Track>()
            .Property(t => t.Artist).ToJsonProperty("artist");
        modelBuilder.Entity<Track>()
            .Property(t => t.Slug).ToJsonProperty("slug");
        modelBuilder.Entity<Track>()
            .Property(t => t.Title).ToJsonProperty("title");
        modelBuilder.Entity<Track>()
            .Property(t => t.Duration).ToJsonProperty("duration");
        modelBuilder.Entity<Track>()
            .Property(t => t.SongKey).ToJsonProperty("songKey");
        modelBuilder.Entity<Track>()
            .Property(t => t.Created).ToJsonProperty("created");
        modelBuilder.Entity<Track>()
            .Property(t => t.Updated).ToJsonProperty("updated");
    }
}