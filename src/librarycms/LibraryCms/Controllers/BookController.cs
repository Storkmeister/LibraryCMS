using LibraryCmsShared.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
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
        public IActionResult SearchAllRentableBooks(string searchtext)
        {
            List<Book> Books
                = new();

            Books = _context.Books
                .Where(b => b.Status == 1)
                .Where(b => b.Title.Contains(searchtext))
                .ToList();

            var json = JsonConvert.SerializeObject(Books, Formatting.Indented);
            IActionResult response = Ok(json);
            return response;
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult SearchBooksByAuthor(string searchtext)
        {
            List<Book> Books
                = new();

            Books = _context.Books
                .Where(b => b.Status == 1)
                .Where(b => b.Author.Contains(searchtext))
                .ToList();

            foreach (Book book in Books)
            {
                
            }

            var json = JsonConvert.SerializeObject(Books, Formatting.Indented);
            IActionResult response = Ok(json);
            return response;
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult SearchBooksByGenre(string searchtext)
        {
            List<Book> books =
                new();

            books = _context.Books
                .Include(b => b.Genres)
                .Where(b => b.Genres.Select(g => g.Genre.Name).Contains(searchtext))
                .ToList();

            if (books != null)
            {
                foreach (var book in books)
                {
                    book.Genres.Clear();
                }

                var json = JsonConvert.SerializeObject(books, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            else
            {
                var json = JsonConvert.SerializeObject(books, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetBook(int Id)
        {
            Book gotBook = new Book();

            gotBook = _context.Books
                .Where(b => b.Id == Id)
                .SingleOrDefault();
            if (gotBook != null)
            {
                var json = JsonConvert.SerializeObject(gotBook, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            else
            {
                var json = JsonConvert.SerializeObject(gotBook, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetBooksByGenreId(int Id)
        {
            List<Book> books = 
                new ();

            books = _context.Books
                .Include(b => b.Genres)
                .Where(b => b.Genres.Select(g => g.Id).Contains(Id))
                .ToList();

            if (books != null)
            {
                foreach (var book in books)
                {
                    book.Genres.Clear();
                }

                var json = JsonConvert.SerializeObject(books, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            else
            {
                var json = JsonConvert.SerializeObject(books, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }


        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateBook([FromBody] Book book)
        {
            //prepare response data
            //TODO: Verify that user is admin. Then proceed to create a new book

            try
            {
                _context.Books.Add(book);
                _context.Books.Attach(book);

                List<Genre> genres = book.Genres
                    .Select(g => g.Genre).ToList();

                foreach (var genre in genres)
                {
                    book.AddGenre(genre);
                }

                _context.SaveChanges();

                //set response data

                var json = JsonConvert.SerializeObject(book, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            catch
            {
                var json = JsonConvert.SerializeObject(book, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }

        [AllowAnonymous]
        [HttpPut]
        public IActionResult UpdateBook([FromBody] Book book, Genre genre)
        {

            //TODO: Verify that user is admin. Then proceed to create a new book

            try
            {
                var currentBook = _context.Books
                    .Where(b => b.Id == book.Id)
                    .SingleOrDefault();

                _context.Entry(currentBook).State = EntityState.Detached;

                book.Id = currentBook.Id;
                book.Title = currentBook.Title;
                book.Author = currentBook.Author;
                book.Resume = currentBook.Resume;
                book.PicturePath = currentBook.PicturePath;
                book.PageCount = currentBook.PageCount;
                book.Publisher = currentBook.Publisher;
                book.PublishedOn = currentBook.PublishedOn;
                book.Status = currentBook.Status;
                book.DefaultRentalDays = currentBook.DefaultRentalDays;
                book.BooksInStock = currentBook.BooksInStock;
                if(genre != null || genre.Name != "")
                {
                    book.AddGenre(genre);
                }

                _context.Books.Attach(book);

                var bookEntry = _context.Entry(book);

                bookEntry.Property("Id").IsModified = false;
                _context.Entry(book).State = EntityState.Modified;
                _context.SaveChanges();

                var json = JsonConvert.SerializeObject(book, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            catch
            {
                var json = JsonConvert.SerializeObject(book, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }
    }
}
