﻿namespace Project_Api.Models
{
    public class AddUserDto
    {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string phone { get; set; }
        public required int status { get; set; }
    }
}