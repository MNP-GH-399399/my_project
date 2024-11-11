using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_Api.Migrations
{
    /// <inheritdoc />
    public partial class AddPrimaryKeyToOrderNo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AddtoCarts",
                columns: table => new
                {
                    OrderNo = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CustId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductID = table.Column<int>(type: "int", nullable: false),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CartStatus = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AddtoCarts", x => x.OrderNo);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AddtoCarts");
        }
    }
}
