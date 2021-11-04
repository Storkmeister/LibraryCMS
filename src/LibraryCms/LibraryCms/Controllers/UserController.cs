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
    public class UserController : ControllerBase
    {
        private readonly LibraryCmsShared.Context _context = null;

        public UserController()
        {
            _context = new LibraryCmsShared.Context();
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateUser([FromBody]User user)
        {
            try
            {
                _context.Users.Add(user);

                user.IsAdmin = false;
                user.ApprovedUser = false;
                user.LoanLimit = 3;

                _context.SaveChanges();

                string success = "User created successfully";
                var json = JsonConvert.SerializeObject(success, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            catch
            {
                string Failiure = $"User with email {user.Email} already exists";
                var json = JsonConvert.SerializeObject(Failiure, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }
    }
}
