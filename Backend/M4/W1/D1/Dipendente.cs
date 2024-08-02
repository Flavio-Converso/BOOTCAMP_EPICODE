public class Dipendente
{
    public string nome;
    public string cognome;
    public int eta;
    public string lavoro;
    public string Nome
    {
        get { return nome; }
        set { nome = value; }

    }
    public string Cognome
    {
        get { return cognome; }
        set { cognome = value; }
    }
    public int Eta
    {
        get { return eta; }
        set { eta = value; }
    }
    public string Lavoro
    {
        get { return lavoro; }
        set { lavoro = value; }
    }
    public void Descriviti()
    {
        Console.WriteLine($"Mi chiamo  {nome}  {cognome}  ho  {eta}  anni e faccio il {lavoro} come lavoro");
    }
}