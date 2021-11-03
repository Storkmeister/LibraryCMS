﻿using LibraryCmsShared.Models;
using System;
using System.Data.Entity;

namespace LibraryCmsShared
{
    public class Context : DbContext
    {
        public Context()
        {
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<Context>());
        }
        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<RentalTable> Rentals { get; set; }
        public DbSet<User> Users { get; set; }

    }
}