using HomeLoanApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System;
namespace HomeLoanApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropController : ControllerBase
    {
        HomeLoanContext db = new HomeLoanContext();

        [HttpGet]
        [Route("ListProp")]
        public IActionResult GetProp()
        {
            var data = from prop in db.Props
                       select new
                       {
                           PId = prop.PId,
                           Name = prop.Name,
                           Locality = prop.Locality,
                           City = prop.City,
                           State = prop.State,
                           Pin = prop.Pin,
                           CId = prop.CId

                       };
            return Ok(data);
        }

        [HttpPost]
        [Route("AddProp")]
        public IActionResult PostProp(Prop prop)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    db.Props.Add(prop);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Successfully Added", prop);
        }

        [HttpPut]
        [Route("EditProp/{id}")]
        public IActionResult PutCred(int id, Prop prop)
        {
            if (ModelState.IsValid)
            {
                Prop oprop = db.Props.Find(id);
                oprop.Name = prop.Name;
                oprop.Locality = prop.Locality;
                oprop.City = prop.City;
                oprop.State = prop.State;
                oprop.Pin = prop.Pin;
                db.SaveChanges();
                return Ok();
            }
            return BadRequest("Unable to edit record");
        }
    }
}
