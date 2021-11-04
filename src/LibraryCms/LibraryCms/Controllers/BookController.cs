﻿using LibraryCmsShared.Models;
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
        public IActionResult GetAllRentableBooks()
        {
            List<Book> Books = new List<Book>();

            Books = _context.Books
                .Where(b => b.BooksInStock > 0)
                .Where(b => b.Status == 1)
                .ToList();

            var json = JsonConvert.SerializeObject(Books, Formatting.Indented);
            IActionResult response = Ok(json);
            return response;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateBook([FromBody]Book book)
        {
            //prepare response data
            Dictionary<string, string> data =
                new();
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
                data.Add("state", "false");
                data.Add("description", "Book Could not be added!");
                data.Add("data", "");

                string Failiure = "Book already exists or Data is not valid! Check required fields.";
                var json = JsonConvert.SerializeObject(data, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }
    }
}
