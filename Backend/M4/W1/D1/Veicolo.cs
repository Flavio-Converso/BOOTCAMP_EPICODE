internal class Veicolo
{
    public string Marca { get; set; }
    public string Modello { get; set; }
    public int Anno { get; set; }

    public void Descriviti()
    {
        System.Console.WriteLine($"Sono un veicolo di marca {Marca}, modello {Modello}, anno di produzione: {Anno}");
    }
}