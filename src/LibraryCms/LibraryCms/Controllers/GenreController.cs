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
    public class GenreController : ControllerBase
    {

        private readonly LibraryCmsShared.Context _context = null;

        public GenreController()
        {
            _context = new LibraryCmsShared.Context();
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetGenres()
        {
            List<Genre> Genres 
                = new ();

            Genres = _context.Genres
                .OrderBy(g => g.Name)
                .ToList();

            if (Genres != null)
            {
                var json = JsonConvert.SerializeObject(Genres, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            else
            {
                var json = JsonConvert.SerializeObject(Genres, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetGenreById(int Id)
        {
            Genre gotGenre = new Genre();

            gotGenre = _context.Genres
                .Where(g => g.Id == Id)
                .SingleOrDefault();

            if (gotGenre != null)
            {
                var json = JsonConvert.SerializeObject(gotGenre, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            else
            {
                var json = JsonConvert.SerializeObject(gotGenre, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }
    }
}
