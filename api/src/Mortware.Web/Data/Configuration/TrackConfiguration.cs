using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mortware.Web.Data.Models;

namespace Mortware.Web.Data.Configuration;

public class TrackConfiguration : IEntityTypeConfiguration<Track>
{
    public void Configure(EntityTypeBuilder<Track> builder)
    {
        builder
            .ToTable("Tracks")
            .HasKey(x => x.Id);

        builder.Property(x => x.Artist)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(x => x.Title)
            .IsRequired()
            .HasMaxLength(100);
        
        builder.Property(x => x.Slug)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(x => x.SourceUrl)
            .IsRequired()
            .HasMaxLength(255);

        builder.Property(x => x.SourceUser)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(x => x.Duration)
            .IsRequired()
            .HasMaxLength(10);

        builder.Property(x => x.SongKey)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(x => x.Tempo)
            .IsRequired()
            .HasPrecision(5, 2);
        
        builder.Ignore(x => x.FullMix);

        builder.HasMany(x => x.Stems).WithOne().HasForeignKey("TrackId");
        builder.HasMany(x => x.Mixes).WithOne().HasForeignKey("TrackId");
    }
}