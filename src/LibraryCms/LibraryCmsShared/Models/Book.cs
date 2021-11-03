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
            Authors = new List<Author>();
            Genres = new List<Genre>();
            Rentals = new List<RentalTable>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required, StringLength(60)]
        public string Title { get; set; }
        [Required, StringLength(1000)]
        public string Resume { get; set; }
        public string PicturePath { get; set; }
        public int PageCount { get; set; }
        public string Publisher { get; set; }
        public DateTime PublishedOn { get; set; }
        public int Status { get; set; }
        public int DefaultRentalDays { get; set; }
        public int BooksInStock { get; set; }


        public ICollection<Author> Authors { get; set; }
        public ICollection<Genre> Genres { get; set; }
        public ICollection<RentalTable> Rentals { get; set; }
    }
}
