using System.Collections.Generic;

namespace LibraryCmsShared.Models
{
    public class Genre
    {
        public Genre()
        {
            Books = new List<Book>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string PicturePath { get; set; }
        public ICollection<Book> Books { get; set; }

    }
}