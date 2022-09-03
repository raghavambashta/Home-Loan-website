using HomeLoanApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
namespace HomeLoanApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankController : ControllerBase
    {
        HomeLoanContext db = new HomeLoanContext();
        [HttpGet]
        [Route("ListBank")]
        public IActionResult GetBank()
        {
            var data = from bank in db.Banks
                       select new
                       {
                           BId = bank.BId,
                           Name = bank.Name,
                           AccNum = bank.AccNum,
                           Ifsc = bank.Ifsc,
                           Cibil = bank.Cibil,
                           CId = bank.CId
                       };
            return Ok(data);
        }
        [HttpPost]
        [Route("AddBank")]
        public IActionResult PostBank(Bank bank)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    db.Banks.Add(bank);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Successfully Added", bank);
        }

        [HttpPut]
        [Route("EditBank/{id}")]
        public IActionResult PutCred(int id, Bank bank)
        {
            if (ModelState.IsValid)
            {
                Bank obank = db.Banks.Find(id);
                obank.Name = bank.Name;
                obank.AccNum = bank.AccNum;
                obank.Ifsc = bank.Ifsc;
                db.SaveChanges();
                return Ok();
            }
            return BadRequest("Unable to edit record");
        }
    }
}
