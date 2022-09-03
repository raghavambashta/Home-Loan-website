using System;
using System.Collections.Generic;

#nullable disable

namespace HomeLoanApi.Models
{
    public partial class Emp
    {
        public int EId { get; set; }
        public string EmpType { get; set; }
        public string OrgType { get; set; }
        public string EmpName { get; set; }
        public int Income { get; set; }
        public int CId { get; set; }

        public virtual Cred CIdNavigation { get; set; }
    }
}
