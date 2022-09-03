using System;
using System.Collections.Generic;

#nullable disable

namespace HomeLoanApi.Models
{
    public partial class Approval
    {
        public int AId { get; set; }
        public string Approved { get; set; }
        public int Amount { get; set; }
        public int CId { get; set; }

        public virtual Cred CIdNavigation { get; set; }
    }
}
