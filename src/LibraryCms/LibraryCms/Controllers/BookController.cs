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
    public class BookController : ControllerBase
    {

        private readonly LibraryCmsShared.Context _context = null;

        public BookController()
        {
            _context = new LibraryCmsShared.Context();
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetResponse()
        {

            string success = "Succesfully retrieved get response.";
            var json = JsonConvert.SerializeObject(success, Formatting.Indented);
            IActionResult response = Ok(json);
            return response;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateBook([FromBody]Book book)
        {
            //prepare response data
            Dictionary<string, string> data =
                new Dictionary<string, string>();
            //TODO: Verify that user is admin. Then proceed to create a new book

            try
            {
                _context.Books.Add(book);
                _context.SaveChanges();

                //set response data
                data.Add("state", "true");
                data.Add("description", "Book successfully added!");
                data.Add("data", "");

                var json = JsonConvert.SerializeObject(data ,Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            catch
            {
                string Failiure = "Book already exists or Data is not valid! Check required fields.";
                var json = JsonConvert.SerializeObject(Failiure, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }
    }
}
