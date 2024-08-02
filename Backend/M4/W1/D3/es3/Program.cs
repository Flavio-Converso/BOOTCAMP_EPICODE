namespace es3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Inserisci la dimensione del tuo array");
            int n = int.Parse(Console.ReadLine());
            int somma = 0;
            double media = 0;
            int[] array = new int[n];
            //inserimento valori
            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("Inserisci il valore per la posizione " + i);
                array[i] = int.Parse(Console.ReadLine());
            }
            //somma e media
            for (int i = 0;i < array.Length; i++)
            {
                somma += array[i];
            }
            Console.WriteLine($"La somma è:{somma}");
            media = somma / array.Length;
            Console.WriteLine($"La media è:{media}");
        }
    }
}
