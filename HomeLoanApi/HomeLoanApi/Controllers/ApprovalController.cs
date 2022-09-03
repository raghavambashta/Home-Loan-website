using HomeLoanApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System;
namespace HomeLoanApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApprovalController : ControllerBase
    {
        HomeLoanContext db = new HomeLoanContext();
        [HttpGet]
        [Route("ListApproval")]
        public IActionResult GetApproval()
        {
            var data = from approval in db.Approvals
                       select new
                       {
                           AId = approval.AId,
                           Approved = approval.Approved,
                           Amount = approval.Amount,
                           CId = approval.CId
                       };
            return Ok(data);
        }
        [HttpPost]
        [Route("AddApproval")]
        public IActionResult PostApproval(Approval approval)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    db.Approvals.Add(approval);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Successfully Added", approval);
        }

        [HttpPut]
        [Route("EditApproval/{id}")]
        public IActionResult PutApproval(int id, Approval approval)
        {
            if (ModelState.IsValid)
            {
                Approval oapproval = db.Approvals.Find(id);
                oapproval.Approved = approval.Approved;
                oapproval.Amount = approval.Amount;
                db.SaveChanges();
                return Ok();
            }
            return BadRequest("Unable to edit record");
        }
    }
}
