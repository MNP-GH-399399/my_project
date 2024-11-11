using System.ComponentModel.DataAnnotations;

namespace Project_Api.Models.Entities
{
    public class AddItemDto
    {
        [Required]
        public string ItemName { get; set; }
        public int ItemCount {  get; set; }
        public decimal Price {  get; set; }
    }
}
