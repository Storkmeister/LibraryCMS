using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LibraryCmsShared.Models
{
    public class Author
    {
        public Author()
        {
            Books = new List<BookAuthors>();
        }
        public int Id { get; set; }

        [Required, StringLength(60)]
        public string Name { get; set; }


        public ICollection<BookAuthors> Books { get; set; }
    }
}