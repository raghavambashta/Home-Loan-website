using System;
using System.Collections.Generic;

#nullable disable

namespace HomeLoanApi.Models
{
    public partial class Cred
    {
        public Cred()
        {
            Applicants = new HashSet<Applicant>();
            Approvals = new HashSet<Approval>();
            Banks = new HashSet<Bank>();
            Docs = new HashSet<Doc>();
            Emps = new HashSet<Emp>();
            Loans = new HashSet<Loan>();
            Props = new HashSet<Prop>();
        }

        public int Id { get; set; }
        public string MobileNum { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Applicant> Applicants { get; set; }
        public virtual ICollection<Approval> Approvals { get; set; }
        public virtual ICollection<Bank> Banks { get; set; }
        public virtual ICollection<Doc> Docs { get; set; }
        public virtual ICollection<Emp> Emps { get; set; }
        public virtual ICollection<Loan> Loans { get; set; }
        public virtual ICollection<Prop> Props { get; set; }
    }
}
