using System.ComponentModel.DataAnnotations;

namespace Project_Api.Models
{
    public class AddtoCartDto
    {
        [Key] // Mark OrderNo as the primary key
        public Guid OrderNo { get; set; }

        [Required] // Ensures CustId is not null
        public string CustId { get; set; }

        public int ProductID { get; set; }

        [Required] // Ensures ProductName is not null
        public string ProductName { get; set; }

        public int Quantity { get; set; }

        public decimal Price { get; set; }

        public int CartStatus { get; set; }
    }
}
