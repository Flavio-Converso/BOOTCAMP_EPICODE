namespace _26_06.Models
{
    public class IndexViewModel
    {
        public Persona Persona { get; set; }
        public List<Sala> Sale { get; set; }
        public Biglietto Biglietto { get; set; }

        public IndexViewModel()
        {
            Persona = new Persona();
            Biglietto = new Biglietto { Sala = new Sala() };
            Sale = new List<Sala>(); // La lista viene popolata dal controller
        }
    }
}
