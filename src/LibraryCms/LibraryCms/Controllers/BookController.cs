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

    }
}
