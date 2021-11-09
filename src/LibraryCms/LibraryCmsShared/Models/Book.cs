using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryCmsShared.Models
{
    public class Book
    {
        public Book()
        {
            Authors = new List<BookAuthors>();
            Genres = new List<BookGenres>();
            Rentals = new List<Rental>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required, StringLength(60)]
        public string Title { get; set; }
        [Required, StringLength(2500)]
        public string Resume { get; set; }
        public string PicturePath { get; set; }
        public int PageCount { get; set; }
        public string Publisher { get; set; }
        public DateTime PublishedOn { get; set; }
        public int Status { get; set; }
        public int DefaultRentalDays { get; set; }
        public int BooksInStock { get; set; }

        public ICollection<BookAuthors> Authors { get; set; }
        public ICollection<BookGenres> Genres { get; set; }
        public ICollection<Rental> Rentals { get; set; }

        //for DB initializer class
        public void AddAuthor(Author author)
        {
            Authors.Add(new BookAuthors()
            {
                Author = author
            });
        }

        public void AddGenre(Genre genre)
        {
            Genres.Add(new BookGenres()
            {
                Genre = genre
            });
        }

        //for Migrations configuration class
        public void AddAuthor(int authorId)
        {
            Authors.Add(new BookAuthors()
            {
                AuthorId = authorId
            });
        }


        public void AddGenre(int genreId)
        {
            Genres.Add(new BookGenres()
            {
                GenreId = genreId
            });
        }
    }
}
