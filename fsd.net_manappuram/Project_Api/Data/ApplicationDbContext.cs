using Microsoft.EntityFrameworkCore;
using Project_Api.Models.Entities;

namespace Project_Api.Data
{
    public class ApplicationDbContext:DbContext
    {


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AddtoCart>()
                .Property(a => a.Price)
                .HasColumnType("decimal(18,2)") // Specify the SQL Server type
                .HasPrecision(18, 2); // Specify precision and scale

            modelBuilder.Entity<Itemdetails>()
                .Property(i => i.Price)
                .HasColumnType("decimal(18,2)") // Specify the SQL Server type
                .HasPrecision(18, 2); // Specify precision and scale

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Registration> registrations { get; set; }
        public DbSet<AddtoCart> AddtoCarts { get; set; }
        public DbSet<Itemdetails> Itemdetails { get; set; }
        public DbSet<UserLogin> Users { get; set; }

        public DbSet<Orders> Orders { get; set; }

        //public DbSet<Login> Users { get; set; }



    }
}
