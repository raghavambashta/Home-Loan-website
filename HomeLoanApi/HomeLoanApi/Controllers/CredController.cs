using HomeLoanApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System;
using Microsoft.EntityFrameworkCore;
using HomeLoanApi.ViewModel;
namespace HomeLoanApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CredController : ControllerBase
    {
        HomeLoanContext db = new HomeLoanContext();
        [HttpGet]
        [Route("ListCred")]
        public IActionResult GetCred()
        {
            var data = from cred in db.Creds select new { Id = cred.Id, MobileNum = cred.MobileNum, 
                Email = cred.Email, Password = cred.Password};
            return Ok(data);
        }

        [HttpGet]
        [Route("userpage/{id}")]
        public IActionResult GetDeptInfo(int id)
        {
            var data = db.UserPage_VMs.FromSqlInterpolated<UserPage_VM>($"userpage {id}");
            return Ok(data);
        }

        [HttpPost]
        [Route("AddCred")]
        public IActionResult PostCred(Cred cred)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    db.Creds.Add(cred);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Successfully Added", cred);
        }

        [HttpPut]
        [Route("EditCred/{id}")]
        public IActionResult PutCred(int id, Cred cred)
        {
            if (ModelState.IsValid)
            {
                Cred ocred = db.Creds.Find(id);
                ocred.Password = cred.Password;
                db.SaveChanges();
                return Ok();
            }
            return BadRequest("Unable to edit record");
        }

        [HttpDelete]
        [Route("DeleteCred/{id}")]
        public IActionResult DeleteCred(int id)
        {
            var data = db.Creds.Find(id);
            db.Creds.Remove(data);
            db.SaveChanges();
            return Ok();
        }
    }
}
