using LibraryCmsShared.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace LibraryCms.Controllers
{
    public class RentalController : ControllerBase
    {

        private readonly LibraryCmsShared.Context _context = null;

        public RentalController()
        {
            _context = new LibraryCmsShared.Context();
        }

        [Authorize]
        [HttpPost]
        public IActionResult RentBook([FromBody] Rental rental)
        {

            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null && 
                _context.Users
                .Where(u => u.Id == Convert.ToInt32(NameId) &&
                        u.Rentals.Count < u.LoanLimit).SingleOrDefault() != null)
            {

                //finding the book from the rentals bookid provided by the body
                Book bookToRent = _context.Books.Find(rental.BookId);

                //setting the return deadline to be the rental date provided by the body + 
                //the books default rental days
                rental.ReturnDeadline = rental.RentalDate.AddDays(bookToRent.DefaultRentalDays);

                //Attaching the book to rent to the context
                _context.Books.Attach(bookToRent);

                //modifying the books rental table
                bookToRent.AddRental(rental);

                //setting the rental state to modified so the changes will be saved by EF
                var bookEntry = _context.Entry(bookToRent);
                bookEntry.State = System.Data.Entity.EntityState.Modified;

                //saving the changes
                _context.SaveChanges();

                //returning the rental object so the frontend knows what was saved to the db if everything went well.
                var json = JsonConvert.SerializeObject(rental, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;

            } 
            else
            {
                IActionResult response = BadRequest("You Need to Log In to Rent a Book");
                return response;
            }
        }
    }
}