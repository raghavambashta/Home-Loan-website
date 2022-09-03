using System;
using System.Collections.Generic;

#nullable disable

namespace HomeLoanApi.Models
{
    public partial class Loan
    {
        public int LId { get; set; }
        public string AccNum { get; set; }
        public int AmtReq { get; set; }
        public int InstallmentNum { get; set; }
        public int Installment { get; set; }
        public int CId { get; set; }

        public virtual Cred CIdNavigation { get; set; }
    }
}
