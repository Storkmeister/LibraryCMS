using LibraryCmsShared.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
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

        [AllowAnonymous]
        [HttpPost]
        public IActionResult RentBook([FromBody] Rental rental)
        {

            Book bookToRent = _context.Books.Find(rental.BookId);
            rental.ReturnDeadline = rental.RentalDate.AddDays(bookToRent.DefaultRentalDays);
            _context.Books.Attach(bookToRent);

            var bookEntry = _context.Entry(bookToRent);
            bookToRent.Rentals = (ICollection<Rental>)rental;

            _context.SaveChanges();

            var json = JsonConvert.SerializeObject(rental, Formatting.Indented);
            IActionResult response = Ok(rental);
            return response;

            //if (bookToRent.BooksInStock > 0 /* && 
            //                                * User.ApprovedUser && 
            //                                * User.LoanLimit !> 
            //                                * (amount of books user has actively loaned right now.) */)
            //{
            //    //newRental.UserId = User.Id;
            //}
            //else
            //{
            //    //need to add alternative add method
            //    var json = JsonConvert.SerializeObject(rental, Formatting.Indented);
            //    IActionResult response = BadRequest(rental);
            //    return response;
            //}

        }


    }
}