using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project_Api.Models.Entities
{
    [Table("Itemdetails")]
    public class Itemdetails
    {
        [Key]
        public int ItemId { get; set; }

        [Required]
        public string ItemName { get; set; }

        public int ItemCount { get; set; }

        public decimal Price { get; set; }

        // You can store either a file path or binary data for the image
        public string? ImagePath { get; set; } // For storing image file path
        public byte[]? ImageData { get; set; } // Optional: for storing image as binary data

        public string ImageType { get; set; } // e.g., jpg, png
    }
}
