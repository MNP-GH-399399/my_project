using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_Api.Data;
using Project_Api.Models;
using Project_Api.Models.Entities;
using System.Reflection.Metadata.Ecma335;

namespace Project_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public EmployeesController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet("GetAllEmployees")]
        public IActionResult GetAllEmployees()
        {
            var allEmployees = dbContext.Employees.ToList();
            return Ok(allEmployees);
        }
        [HttpGet("GetallUsers")] 
        public IActionResult GetallUsers()
        {
            var allUsers = dbContext.Users.ToList();
            return Ok(allUsers);
        }
        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser(AddUserDto addUserDto)
        {
            if (!ModelState.IsValid)
            {

            return BadRequest(ModelState);
            }
            var objUser = dbContext.Users.FirstOrDefault(x=>x.Email== addUserDto.Email);
            if (objUser == null)
            {
                var userentity = new UserLogin()
                {
                    Email = addUserDto.Email,
                    Name = addUserDto.Name,
                    Password = addUserDto.Password,
                    phone = addUserDto.phone,
                    status = addUserDto.status

                };

                dbContext.Users.Add(userentity);
                dbContext.SaveChanges();
               
                return Ok(new { message = "Registration Successfully completed", stat = 0 });
            }
            else
            {
                return Ok(new { message = "User already exsits", stat = 1 });
               
            }
        }
        [HttpPost]
        [Route("Login")]
        public IActionResult Login( LoginRequestDto loginRequestDto)
        {
            var user = dbContext.Users.FirstOrDefault(u => u.Email == loginRequestDto.Email && u.Password == loginRequestDto.Password);

            if (user != null)
            {
                var status = user.status;
                var email=user.Email;
                return Ok(new { message = "Login successful",stat = status, emal = email });
               
            }
            return Unauthorized("Invalid username or password.");
            // Generate a JWT token or return success response

        }




        [HttpPost]
        [Route("AddtoOrder")]
        public async Task<IActionResult> AddtoOrder([FromBody] Addorders addorder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return 400 Bad Request if model validation fails
            }

          

                try
                {
                    // Map the DTO to the AddtoCart entity
                    var addToCartEntity = new Orders
                    {
                        OrderNo = addorder.OrderNo,
                        CustId = addorder.CustId,
                        ProductName = addorder.ProductName,
                        Quantity = addorder.Quantity,
                        Price = addorder.Price,
                    };

                    // Add the entity to the database context
                    dbContext.Orders.Add(addToCartEntity);
                }
                catch (Exception ex)
                {
                    // Log the exception here (if needed)
                    return StatusCode(StatusCodes.Status500InternalServerError, "Error saving data");
                }
        

            await dbContext.SaveChangesAsync();
            return Ok(new { message = "Items added to cart successfully", stat = 1 });
        }





        //[HttpPost]
        //[Route("AddtoOrder")]
        //public async Task<IActionResult> AddtoOrder([FromBody] List<Addorders> addorders)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState); // Return 400 Bad Request if model validation fails
        //    }

        //    foreach (var addorder in addorders)
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return BadRequest(ModelState); // Return 400 Bad Request if model validation fails
        //        }

        //        try
        //        {
        //            // Map the DTO to the AddtoCart entity
        //            var addToCartEntity = new Addorders
        //            {
        //                OrderNo = addorder.OrderNo,
        //                CustId = addorder.CustId,
        //                ProductName = addorder.ProductName,
        //                Quantity = addorder.Quantity,
        //                Price = addorder.Price,
        //            };

        //            // Add the entity to the database context
        //            dbContext.Add(addToCartEntity);
        //        }
        //        catch (Exception ex)
        //        {
        //            // Log the exception here (if needed)
        //            return StatusCode(StatusCodes.Status500InternalServerError, "Error saving data");
        //        }
        //    }

        //    await dbContext.SaveChangesAsync();
        //    return Ok(new { message = "Items added to cart successfully", stat = 1 });
        //}




            [HttpPost]
        [Route("Addtocart")]
        public async Task<IActionResult> Addtocart([FromBody] AddtoCartDto addtoCartDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return 400 Bad Request if model validation fails
            }

            try
            {
                // Map the DTO to the AddtoCart entity
                var addToCartEntity = new AddtoCart
                {
                    OrderNo = addtoCartDto.OrderNo,
                    CustId = addtoCartDto.CustId,
                    ProductID = addtoCartDto.ProductID,
                    ProductName = addtoCartDto.ProductName,
                    Quantity = addtoCartDto.Quantity,
                    Price = addtoCartDto.Price,
                    CartStatus = addtoCartDto.CartStatus
                };

                // Add the entity to the database context
                dbContext.Add(addToCartEntity);
                await dbContext.SaveChangesAsync();
                return Ok(new { message = "Item added to cart successfully", stat = 1 });

            }
            catch (Exception ex)
            {
                // Log the exception here (if needed)
                return StatusCode(StatusCodes.Status500InternalServerError, "Error saving data");
            }
        }
        [HttpPost]
        [Route("AddItem")]
        public async Task<IActionResult> AddItem([FromForm] AddItemDto addItemDto, IFormFile image)
        {
            // Validate the model
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                // Handling image saving (as a file or binary data)
                string imagePath = null;
                byte[] imageData = null;

                // Check if an image is provided
                if (image != null && image.Length > 0)
                {
                    // Option 1: Save the image to the server and store the file path
                    var fileName = Guid.NewGuid() + Path.GetExtension(image.FileName);
                    var filePath = Path.Combine("wwwroot/images", fileName);
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await image.CopyToAsync(stream);
                    }
                    imagePath = "/images/" + fileName;

                    // Option 2: Save the image as binary data (if needed)
                    using (var ms = new MemoryStream())
                    {
                        await image.CopyToAsync(ms);
                        imageData = ms.ToArray();
                    }
                }

                // Create a new ItemDetails entity and populate it with data
                var item = new Itemdetails
                {
                    ItemName = addItemDto.ItemName,
                    ItemCount = addItemDto.ItemCount,
                    Price = addItemDto.Price,
                    ImagePath = imagePath, // Save the file path of the image
                    ImageData = imageData, // Save binary data if needed
                    ImageType = image != null ? Path.GetExtension(image.FileName).TrimStart('.') : null // Set the image type (jpg, png, etc.)
                };

                // Add the new item to the database
                dbContext.Itemdetails.Add(item);
                await dbContext.SaveChangesAsync();

                return Ok("Item added successfully");
            }
            catch (Exception ex)
            {
                // Handle any exception and return a 500 status code
                return StatusCode(StatusCodes.Status500InternalServerError, "Error adding item");
            }
        }
        [HttpGet]
        [Route("GetItems")]
        public async Task<IActionResult> GetItems()
        {
            var items = await dbContext.Itemdetails.ToListAsync();

            if (items == null || items.Count == 0)
            {
                return NotFound("No items found");
            }

            var itemList = items.Select(item => new
            {
                item.ItemId,
                item.ItemName,
                item.ItemCount,
                item.Price,
                ImageUrl = item.ImagePath != null ? item.ImagePath : null,
                ImageType = item.ImageType
            });

            return Ok(itemList);
        }


        [HttpGet]
        [Route("Get_cart_products")]
        public async Task<IActionResult> Get_cart_itms(string email)
        {
            var cart_items=dbContext.AddtoCarts.Where(uu=> uu.CustId== email).ToList();
            return Ok(cart_items);
        }


        [HttpGet("GetItemsbyid11/{email}")]
        public async Task<IActionResult> GetItemsbyid11(string email)
        {
            // Fetch items where CustId (assumed to be string) matches the given email
            var items = await dbContext.AddtoCarts
               .Where(i => i.CustId == email)  // Ensure CustId is a string
               .ToListAsync();  // Remove Include unless CustId has navigation properties

            // Check if any items found
            if (items == null || items.Count == 0)
            {
                return NotFound("No items found");
            }

            return Ok(items);
        }
        [HttpGet("GetItemsbyid/{email}")]
        public async Task<IActionResult> GetItemsbyid(string email)
        {
            // Fetch items where CustId matches the given email
            var items = await dbContext.AddtoCarts
               .Where(i => i.CustId == email && i.CartStatus==0)  // Ensure CustId is a string or compare correctly if not
               .ToListAsync();  // Remove the Include for scalar properties

            // Check if any items found
            if (items == null || items.Count == 0)
            {
                return NotFound("No items found");
            }

            return Ok(items);  // Return the found items
        }
        //[HttpGet]
        //public async Task<ActionResult<Registration>> Getregistrationdtl()
        //{
        //    if (dbContext.registrations == null)
        //    {
        //        return NotFound();
        //    }
        //    var details = await dbContext.registrations.FindAsync();
        //    if (details == null)
        //    {
        //        return NotFound();
        //    }
        //    return details;
        //}
        //[HttpPost]
        //public async Task<ActionResult<Registration>> Registervalues(Registration registration)
        //{
        //    dbContext.registrations.Add(registration);
        //    await dbContext.SaveChangesAsync();
        //    return CreatedAtAction(nameof(Getregistrationdtl), new { id = registration.Id }, registration);
        //}
        //[HttpPut("{id}")]
        //public async Task<ActionResult> PutRegistervalues( int id,Registration registration)
        //{
        //    if(id!= registration.Id)
        //    {
        //        return BadRequest();

        //    }
        //    dbContext.Entry(registration).State=EntityState.Modified;
        //    try
        //    {
        //        await dbContext.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        throw;
        //    }
        //    return Ok();
        //}
        //[HttpPost]
        //public async Task<IActionResult> Register([FromBody] Registration registration)
        //{
        //    if (!ModelState.IsValid)
        //        return BadRequest(ModelState);



        //    dbContext.registrations.Add(registration);
        //    await dbContext.SaveChangesAsync();

        //    return CreatedAtAction(nameof(GetRegistrationById), new { id = registration.Id }, registration);
        //}



        //// To retrieve a product by Id
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetRegistrationById(int id)
        //{
        //    var registration = await dbContext.registrations.FindAsync(id);

        //    if (registration == null)
        //        return NotFound();

        //    return Ok(registration);
        //}
    }
}
