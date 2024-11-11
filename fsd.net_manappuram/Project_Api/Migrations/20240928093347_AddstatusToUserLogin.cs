using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_Api.Migrations
{
    /// <inheritdoc />
    public partial class AddstatusToUserLogin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "status",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "status",
                table: "Users");
        }
    }
}
