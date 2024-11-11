using System.ComponentModel.DataAnnotations;

namespace Project_Api.Models.Entities
{
    public class Orders
    {
        [Key] // Mark OrderNo as the primary key
        public Guid OrderNo { get; set; }

        [Required] // Ensures CustId is not null
        public string CustId { get; set; }


        [Required] // Ensures ProductName is not null
        public string ProductName { get; set; }
        [Required]
        public int Quantity { get; set; }
        //[Required]
        public decimal Price { get; set; }
   
    }
}
