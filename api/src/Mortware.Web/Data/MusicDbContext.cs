using Microsoft.EntityFrameworkCore;
using Mortware.Web.Data.Configuration;
using Mortware.Web.Data.Models;

namespace Mortware.Web.Data;

public class MusicDbContext(DbContextOptions<MusicDbContext> options) : DbContext(options)
{
    public required DbSet<Track> Tracks { get; init; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfiguration(new TrackConfiguration());
        modelBuilder.ApplyConfiguration(new StemConfiguration());
        modelBuilder.ApplyConfiguration(new MixConfiguration());
        
        // Set a global convention for all string properties
        foreach (var entity in modelBuilder.Model.GetEntityTypes())
        {
            foreach (var property in entity.GetProperties())
            {
                if (property.ClrType == typeof(string) && !property.GetMaxLength().HasValue)
                {
                    property.SetMaxLength(2048);
                }
            }
        }
    }
}