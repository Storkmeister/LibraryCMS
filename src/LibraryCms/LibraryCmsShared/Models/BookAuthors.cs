using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryCmsShared.Models
{
    public class BookAuthors
    {
        //explicit bridge table
        public int Id { get; set; }
        public int BookId { get; set; }
        public int AuthorId { get; set; }
        public int GenreId { get; set; }
        
        public virtual Book Book { get; set; }
        public virtual Author Author { get; set; }
        public virtual Genre Genre { get; set; }

    }
}
