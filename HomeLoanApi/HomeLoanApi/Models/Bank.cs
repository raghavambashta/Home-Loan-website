using System;
using System.Collections.Generic;

#nullable disable

namespace HomeLoanApi.Models
{
    public partial class Bank
    {
        public int BId { get; set; }
        public string Name { get; set; }
        public string AccNum { get; set; }
        public string Ifsc { get; set; }
        public int Cibil { get; set; }
        public int CId { get; set; }

        public virtual Cred CIdNavigation { get; set; }
    }
}
