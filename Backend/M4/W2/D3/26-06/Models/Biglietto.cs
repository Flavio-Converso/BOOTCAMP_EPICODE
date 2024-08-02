using System.ComponentModel.DataAnnotations;

namespace _26_06.Models
{
    public enum TipoBiglietto
    {
        Normale,
        Ridotto
    }

    public class Biglietto
    {
        [Display(Name = "Tipo di Biglietto")]
        public TipoBiglietto Tipo { get; set; }

        [Display(Name = "Sala Assegnata")]
        public Sala Sala { get; set; }
    }
}
