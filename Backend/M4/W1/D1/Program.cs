public class Program
{
    public static void Main(string[] args)
    {
        Atleta atleta = new Atleta();
        atleta.Nome = "Mario";
        atleta.Cognome = "Rossi";
        atleta.Eta = 30;
        atleta.Sport = "Calcio";
        atleta.Descriviti();
        
        Dipendente dipendente = new Dipendente();
        dipendente.Nome = "Luca";
        dipendente.Cognome = "Verdi";
        dipendente.Eta = 40;
        dipendente.Lavoro = "Programmatore";
        dipendente.Descriviti();

        Animale animale = new Animale();
        animale.Nome = "Fido";
        animale.Eta = 5;
        animale.Specie = "Cane";
        animale.Descriviti();

        Veicolo veicolo = new Veicolo();
        veicolo.Marca = "Fiat";
        veicolo.Modello = "Panda";
        veicolo.Anno = 2010;
        veicolo.Descriviti();
    }
    
}