using LibraryCmsShared.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
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
            //prepare response data
            Dictionary<string, string> data =
                new();
            try
            {
                _context.Users.Add(user);

                user.IsAdmin = false;
                user.ApprovedUser = false;
                user.LoanLimit = 3;

                _context.SaveChanges();

                //set response data
                data.Add("state", "true");
                data.Add("description", "User successfully added!");
                data.Add("data", "");
                //string success = "User created successfully";
                var json = JsonConvert.SerializeObject(data, Formatting.Indented);
                IActionResult response = Ok(json);
                return response;
            }
            catch
            {
                data.Add("state", "false");
                data.Add("description", $"User with email {user.Email} already exists");
                data.Add("data", "");
                //string Failiure = $"User with email {user.Email} already exists";
                var json = JsonConvert.SerializeObject(data, Formatting.Indented);
                IActionResult response = BadRequest(json);
                return response;
            }
        }

        public User UserLogin(string Mail, string Pass)
        {
            var UserInformation = _context.Users
                .Where(u => u.Password == Pass && u.Email == Mail)
                .SingleOrDefault();
            return UserInformation;
        }
    }


}