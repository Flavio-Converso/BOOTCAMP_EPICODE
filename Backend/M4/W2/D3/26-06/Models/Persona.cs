using System.ComponentModel.DataAnnotations;

namespace _26_06.Models
{
    public class Persona
    {
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Display(Name = "Cognome")]
        public string Cognome { get; set; }
    }
}
