namespace Project_Api.Models.Entities
{
    public class Registration
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; } = null;
        public string? Password { get; set; }
    }
}
