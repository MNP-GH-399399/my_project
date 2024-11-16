using Microsoft.Extensions.Options;
using System.ComponentModel.DataAnnotations;

namespace Library_managment.Entities
{
    public class Tbl_Author
    {

        [Key]
        public int id { get; set; }
        public string Name { get; set; }
        public string Bio { get; set; }



      

    }
}
