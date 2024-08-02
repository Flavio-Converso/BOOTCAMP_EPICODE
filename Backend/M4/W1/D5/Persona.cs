namespace Progetto_21_06
{
    internal enum Sesso
    {
        M,
        F
    }

    internal class Persona
    {
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public Sesso Sesso { get; set; }
        public string DataNascita { get; set; }
        public string CodiceFiscale { get; set; }
        public string ComuneResidenza { get; set; }
    }
}
