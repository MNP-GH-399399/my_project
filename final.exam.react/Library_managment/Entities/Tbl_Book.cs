using Library_managment.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Options;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Library_managment.Entities
{
    public class Tbl_Book

    {
        [Key]
        public int id {get; set;}
        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        public int PublicationYear { get; set; }

        [ForeignKey("Author")]
        public int AuthorId { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        public Category Category { get; set; }

    }
}

