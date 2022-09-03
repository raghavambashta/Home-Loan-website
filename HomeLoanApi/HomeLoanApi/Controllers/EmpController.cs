using HomeLoanApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
namespace HomeLoanApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {
        HomeLoanContext db = new HomeLoanContext();
        [HttpGet]
        [Route("ListEmp")]
        public IActionResult GetEmp()
        {
            var data = from Emp in db.Emps
                       select new
                       {
                           EId = Emp.EId,
                           EmpType = Emp.EmpType,
                           OrgType = Emp.OrgType,
                           EmpName = Emp.EmpName,
                           Income = Emp.Income,
                           CId = Emp.CId
                       };
            return Ok(data);
        }
        [HttpPost]
        [Route("AddEmp")]
        public IActionResult PostApplicant(Emp emp)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    db.Emps.Add(emp);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Successfully Added", emp);
        }

    }
}
