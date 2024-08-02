public class Animale
{
    public string nome;
    public int eta;
    public string specie;
    public string Nome
    {
        get { return nome; }
        set { nome = value; }
    }
    public int Eta
    {
        get { return eta; }
        set { eta = value; }
    }
    public string Specie
    {
        get { return specie; }
        set { specie = value; }
    }
    public void Descriviti()
    {
        Console.WriteLine($"Mi chiamo  {nome}  ho  {eta} anni e sono un {specie}");
    }
}