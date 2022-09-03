using HomeLoanApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace HomeLoanApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        HomeLoanContext db = new HomeLoanContext();
        [HttpPost]
        [Route("")]
        public Cred ApproveUser([FromBody] Login login)
        {
            Cred account = null;
            var accountfound = db.Creds.Where(u => u.Id == login.Id && u.Password == login.Password).SingleOrDefault();
            if(accountfound != null)
            {
                account = accountfound;
            }
            else
            {
                account = null;
            }
            return account;


            //var data = db.Creds.Where(e => e.Email == login.Email).FirstOrDefault();
            //if (data.Password == login.Password)
            //{
            //    return Ok("Login Succesful.");
            //}
            //return BadRequest();
        }

    }
}
