using Library_managment.Entities;
using Library_managment.Models;
using Microsoft.EntityFrameworkCore;


namespace Library_managment.Data
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options)
        {
        }

        public DbSet<Tbl_Book> Books { get; set; }
        public DbSet<Tbl_Author> Authors { get; set; }
        public DbSet<Tbl_Category> Categories { get; set; }



    }
}
