
using Microsoft.EntityFrameworkCore;
using Project_Api.Data;

namespace Project_Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers()
                   .AddJsonOptions(options =>
                   {
                       options.JsonSerializerOptions.PropertyNamingPolicy = null; // Use the property names as they are
                   });
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DbName")));
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                {
                    builder.AllowAnyOrigin() // Allow any origin
                           .AllowAnyMethod() // Allow any HTTP method (GET, POST, etc.)
                           .AllowAnyHeader(); // Allow any header
                });
            });

            var app = builder.Build();

            // Use the CORS policy
            app.UseCors("AllowAll");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // Other middleware
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.UseStaticFiles();
            app.MapControllers();

            app.Run();

        }
    }
}
