﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mortware.Web.Data.Models;

namespace Mortware.Web.Data.Configuration;

public class StemConfiguration : IEntityTypeConfiguration<Stem>
{
    public void Configure(EntityTypeBuilder<Stem> builder)
    {
        builder
            .ToTable("Stems")
            .HasKey(x => x.Id);

        builder.Property(x => x.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(x => x.Slug)
            .HasMaxLength(55);

        builder.Property(x => x.BlobName)
            .HasMaxLength(255);

        builder.Property(x => x.Color)
            .HasMaxLength(7);
    }
}