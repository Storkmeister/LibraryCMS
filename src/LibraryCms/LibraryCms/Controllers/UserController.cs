using LibraryCmsShared.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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

        [Authorize]
        public IActionResult GetUsers()
        {
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null && _context.Users.Where(u => u.Id == Convert.ToInt32(NameId) && u.IsAdmin == true).SingleOrDefault() != null)
            {
                var users = _context.Users
                    .Select(u => u)
                    .Where(u => u.IsAdmin == false)
                    .ToList();


                if(users.Count > 0) { 
                    var json = JsonConvert.SerializeObject(users, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
                else
                {
                    IActionResult response = Ok("There are no users to retrieve.");
                    return response;
                }
            }
            else
            {
                IActionResult response = BadRequest("You need to be an administrator to get this data.");
                return response;
            }
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateUser([FromBody] User user)
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

        [Authorize]
        [HttpPut]
        public IActionResult UpdateUser([FromBody] User user)
        {
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null && _context.Users.Where(u => u.Id == Convert.ToInt32(NameId)).SingleOrDefault() != null)
            {
                try
                {
                    _context.Users.Attach(user);
                    var userEntry = _context.Entry(user);

                    userEntry.Property("Id").IsModified = false;
                    userEntry.Property("IsAdmin").IsModified = false;
                    userEntry.State = EntityState.Modified;
                    _context.SaveChanges();

                    var json = JsonConvert.SerializeObject(user, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
                catch
                {
                    var json = JsonConvert.SerializeObject(user, Formatting.Indented);
                    IActionResult response = BadRequest(json);
                    return response;
                }

            }
            else
            {
                IActionResult response = BadRequest("You Need To Be Logged In To Do This Action.");
                return response;
            }
        }

        [Authorize]
        [HttpPut]
        public IActionResult UpdateUserToAdmin([FromBody] User user)
        {
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null && _context.Users.Where(u => u.Id == Convert.ToInt32(NameId) && u.IsAdmin == true).SingleOrDefault() != null)
            {
                try
                {
                    _context.Users.Attach(user);
                    user.IsAdmin = true;
                    var userEntry = _context.Entry(user);
                    userEntry.Property("Id").IsModified = false;
                    userEntry.State = EntityState.Modified;
                    _context.SaveChanges();

                    var json = JsonConvert.SerializeObject(user, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
                catch
                {
                    var json = JsonConvert.SerializeObject(user, Formatting.Indented);
                    IActionResult response = BadRequest(json);
                    return response;
                }

            }
            else
            {
                IActionResult response = BadRequest("You Need To Be Logged In To Do This Action.");
                return response;
            }
        }

        [Authorize]
        [HttpPut]
        public IActionResult ApproveUser([FromBody] User user)
        {
            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null && _context.Users.Where(u => u.Id == Convert.ToInt32(NameId) && u.IsAdmin == true).SingleOrDefault() != null)
            {
                try
                {
                    _context.Users.Attach(user);
                    user.ApprovedUser = true;
                    var userEntry = _context.Entry(user);
                    userEntry.Property("Id").IsModified = false;
                    userEntry.State = EntityState.Modified;
                    _context.SaveChanges();

                    var json = JsonConvert.SerializeObject(user, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
                catch
                {
                    var json = JsonConvert.SerializeObject(user, Formatting.Indented);
                    IActionResult response = BadRequest(json);
                    return response;
                }

            }
            else
            {
                IActionResult response = BadRequest("You Need To Be Logged In To Do This Action.");
                return response;
            }
        }

        [Authorize]
        [HttpDelete]
        public IActionResult DeleteGenre([FromBody] int Id)
        {

            var jwt = HttpContext.User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claim = jwt.Claims;
            var NameId = claim.FirstOrDefault().Value;
            if (NameId != null && _context.Users.Where(u => u.Id == Convert.ToInt32(NameId) && u.IsAdmin == true).SingleOrDefault() != null)
            {
                try
                {
                    var user = new User() { Id = Id };

                    _context.Entry(user).State = EntityState.Deleted;

                    _context.SaveChanges();

                    var json = JsonConvert.SerializeObject(user, Formatting.Indented);
                    IActionResult response = Ok(json);
                    return response;
                }
                catch
                {
                    var json = JsonConvert.SerializeObject("User could not be deleted.", Formatting.Indented);
                    IActionResult response = BadRequest(json);
                    return response;
                }

            }
            else
            {
                IActionResult response = BadRequest("You Need To Be An Administrator To Do This Action.");
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