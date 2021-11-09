using System.Collections.Generic;

namespace LibraryCmsShared.Models
{
    public class Author
    {
        public Author()
        {
            Books = new List<BookAuthors>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<BookAuthors> Books { get; set; }
    }
}