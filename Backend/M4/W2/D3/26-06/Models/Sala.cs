using System.ComponentModel.DataAnnotations;

namespace _26_06.Models
{
    public class Sala
    {
        public string NomeSala { get; set; }
        public int PostiTotali { get; set; }
        public int PostiOccupati { get; set; }
        public int PostiRidotti { get; set; }

        public int PostiDisponibili => PostiTotali - PostiOccupati;
    }
}
