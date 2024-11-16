using System.ComponentModel.DataAnnotations;

namespace Library_managment.Entities
{
    public class Tbl_Category

    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
