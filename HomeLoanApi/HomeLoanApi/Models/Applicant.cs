using System;
using System.Collections.Generic;

#nullable disable

namespace HomeLoanApi.Models
{
    public partial class Applicant
    {
        public int UId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public DateTime Dob { get; set; }
        public string Gender { get; set; }
        public string Nationality { get; set; }
        public string AadharNum { get; set; }
        public string PanNum { get; set; }
        public int CId { get; set; }

        public virtual Cred CIdNavigation { get; set; }
    }
}
