using Library_managment.Data;
using Library_managment.Entities;
using Library_managment.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Library_managment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {

      private readonly LibraryContext _context;

      public BookController(LibraryContext context)
        { 
            _context = context;
       }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tbl_Book>>> GetBooks()
        {
            var books = await _context.Books
                .Include(b => b.AuthorId)
                .Include(b => b.Category)
                .ToListAsync();

            return Ok(books);
        }

     


    }
}
