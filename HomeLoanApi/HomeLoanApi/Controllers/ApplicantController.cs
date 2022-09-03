using HomeLoanApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
namespace HomeLoanApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicantController : ControllerBase
    {
        HomeLoanContext db = new HomeLoanContext();
        [HttpGet]
        [Route("ListApplicant")]
        public IActionResult GetApplicant()
        {
            var data = from Applicant in db.Applicants
                       select new
                       {
                           UId = Applicant.UId,
                           FirstName = Applicant.FirstName,
                           MiddleName = Applicant.MiddleName,
                           LastName = Applicant.LastName,
                           Dob = Applicant.Dob,
                           Gender = Applicant.Gender,
                           Nationality = Applicant.Nationality,
                           AadharNum = Applicant.AadharNum,
                           PanNum = Applicant.PanNum,
                           CId = Applicant.CId
                       };
            return Ok(data);
        }

        [HttpGet]
        [Route("ListApplicant/{id}")]
        public IActionResult GetDept(int? id)
        {
            if (id == null)
            {
                return BadRequest("Id cannot be null");
            }
            //var data = (from dept in db.Depts.Where(d => d.Id == id).Select(d => new {id = d.Id, Name = d.Name, Location = d.Location}}.FirstorDefault();
            var data = (from applicant in db.Applicants where applicant.UId == id select new { 
                UserId = applicant.UId, 
                FirstName = applicant.FirstName,
                MiddleName = applicant.MiddleName,
                LastName = applicant.LastName,
                Dob = applicant.Dob,
                Gender = applicant.Gender,
                Nationality = applicant.Nationality,
                AadharNum = applicant.AadharNum,
                PanNum = applicant.PanNum,
                CId = applicant.CId
 
            }).FirstOrDefault();
            if (data == null)
            {
                return NotFound($"Applicant {id} not present");
            }
            return Ok(data);
        }
        [HttpPost]
        [Route("AddApplicant")]
        public IActionResult PostApplicant(Applicant applicant)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    db.Applicants.Add(applicant);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Successfully Added", applicant);
        }

        [HttpPut]
        [Route("EditApplicant/{id}")]
        public IActionResult PutCred(int id, Applicant applicant)
        {
            if (ModelState.IsValid)
            {
                Applicant oapplicant = db.Applicants.Find(id);
                oapplicant.FirstName = applicant.FirstName;
                oapplicant.MiddleName = applicant.MiddleName;
                oapplicant.LastName = applicant.LastName;
                oapplicant.Dob = applicant.Dob;
                oapplicant.Gender = applicant.Gender;
                oapplicant.Nationality = applicant.Nationality;
                oapplicant.AadharNum = applicant.AadharNum;
                oapplicant.PanNum = applicant.PanNum;
                db.SaveChanges();
                return Ok();
            }
            return BadRequest("Unable to edit record");
        }
    }
}
