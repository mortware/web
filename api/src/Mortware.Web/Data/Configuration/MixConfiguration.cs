using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mortware.Web.Data.Models;

namespace Mortware.Web.Data.Configuration;

public class MixConfiguration : IEntityTypeConfiguration<Mix>
{
    public void Configure(EntityTypeBuilder<Mix> builder)
    {
        builder
            .ToTable("Mixes")
            .HasKey(x => x.Id);
        
        builder.Property(x => x.Name)
            .IsRequired()
            .HasMaxLength(100);
        
        builder.Property(x => x.Slug)
            .IsRequired()
            .HasMaxLength(55);

        builder.Property(x => x.Filename)
            .IsRequired()
            .HasMaxLength(255);
    }
}