using HomeLoanApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;

namespace HomeLoanApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocController : ControllerBase
    {
        HomeLoanContext db = new HomeLoanContext();
        [HttpGet]
        [Route("ListDoc")]
        public IActionResult GetDoc()
        {
            var data = from doc in db.Docs
                       select new
                       {
                           DId = doc.DId,
                           Aadhaar = doc.Aadhaar,
                           Pan = doc.Pan,
                           Voter = doc.Voter,
                           SalarySlip = doc.SalarySlip,
                           Loa = doc.Loa,
                           Noc = doc.Noc,
                           Agreement = doc.Agreement,
                           CId = doc.CId
                       };
            return Ok(data);
        }
        [HttpPost]
        [Route("AddDoc")]
        public IActionResult PostDoc(Doc doc)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    db.Docs.Add(doc);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Successfully Added", doc);
        }

        [HttpPut]
        [Route("EditDoc/{id}")]
        public IActionResult PutDoc(int id, Doc doc)
        {
            if (ModelState.IsValid)
            {
                Doc odoc = db.Docs.Find(id);
                odoc.Aadhaar = doc.Aadhaar;
                odoc.Pan = doc.Pan;
                odoc.Voter = doc.Voter;
                odoc.SalarySlip = doc.SalarySlip;
                odoc.Loa = doc.Loa;
                odoc.Noc = doc.Noc;
                odoc.Agreement = doc.Agreement;
                db.SaveChanges();
                return Ok();
            }
            return BadRequest("Unable to edit record");
        }
    }
}
