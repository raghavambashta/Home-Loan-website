using System;
using System.ComponentModel.DataAnnotations;
namespace HomeLoanApi.ViewModel
{
    public class UserPage_VM
    {
        [Key]
        public int Id { get; set; }
        public string? MobileNum { get; set; }
        public string? Email { get; set; }
        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }
        public DateTime Dob { get; set; }
        public string? Gender { get; set; }
        public string? Nationality { get; set; }
        public string? AadharNum { get; set; }
        public string? PanNum { get; set; }
        public string? EmpType { get; set; }
        public string? OrgType { get; set; }
        public string? EmpName { get; set; }
        public int? Income { get; set; }
        public string? PropName { get; set; }
        public string? Locality { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public int? Pin { get; set; }
        public string? BankName { get; set; }
        public string? AccNum { get; set; }
        public string? Ifsc { get; set; }
    }
}
