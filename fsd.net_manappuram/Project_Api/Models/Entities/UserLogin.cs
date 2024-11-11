namespace Project_Api.Models.Entities
{
    public class UserLogin
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string phone { get; set; }
        public int status { get; set; }
    }
}
