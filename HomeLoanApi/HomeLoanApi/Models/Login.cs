using System.ComponentModel.DataAnnotations;

namespace HomeLoanApi.Models
{
    public class Login
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
