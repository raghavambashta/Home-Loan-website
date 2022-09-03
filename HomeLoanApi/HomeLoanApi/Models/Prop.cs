using System;
using System.Collections.Generic;

#nullable disable

namespace HomeLoanApi.Models
{
    public partial class Prop
    {
        public int PId { get; set; }
        public string Name { get; set; }
        public string Locality { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Pin { get; set; }
        public int CId { get; set; }

        public virtual Cred CIdNavigation { get; set; }
    }
}
