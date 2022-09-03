using System;
using System.Collections.Generic;

#nullable disable

namespace HomeLoanApi.Models
{
    public partial class Doc
    {
        public int DId { get; set; }
        public string Aadhaar { get; set; }
        public string Pan { get; set; }
        public string Voter { get; set; }
        public string SalarySlip { get; set; }
        public string Loa { get; set; }
        public string Noc { get; set; }
        public string Agreement { get; set; }
        public int CId { get; set; }

        public virtual Cred CIdNavigation { get; set; }
    }
}
