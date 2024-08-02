using Progetto_21_06;

internal class Contribuente : Persona
{
    public double RedditoAnnuale { get; set; }
    public double ImpostaVersare { get; set; }

    public void Menu()
    {
        Console.WriteLine(" /--------------\\");
        Console.WriteLine("|    Benvenuto   |");
        Console.WriteLine(" \\--------------/");


        Console.WriteLine("\nInserisci il tuo nome: ");
        string iNome = Console.ReadLine();

        Console.WriteLine("\nInserisci il tuo cognome: ");
        string iCognome = Console.ReadLine();

        Console.WriteLine("\nInserisci la tua data di nascita (GG-MM-AAAA): ");
        string iDataNascita = Console.ReadLine();

        Console.WriteLine("\nInserisci il tuo codice fiscale: ");
        string iCodiceFiscale = Console.ReadLine();

        bool inputValido = false;
        Sesso iSesso = Sesso.M;
        while (!inputValido)
        {
            Console.WriteLine("\nInserisci il tuo sesso (M/F): ");
            if (Enum.TryParse(Console.ReadLine(), out Sesso sesso))
            {
                if (sesso == Sesso.M || sesso == Sesso.F)
                {
                     iSesso = sesso;
                    inputValido = true;
                }
                else
                {
                    Console.WriteLine("\nSesso non valido. Riprova.");
                }
            }
            else
            {
                Console.WriteLine("\nInput non valido. Riprova.");
            }
        }
        
        Console.WriteLine("\nInserisci il tuo comune di residenza: ");
        string iComuneResidenza = Console.ReadLine();

        bool redditoValido = false;
        double iRedditoAnnuale = 0.0;
        while (!redditoValido)
        {
            Console.WriteLine("\nInserisci il tuo reddito annuale: ");
            if (double.TryParse(Console.ReadLine(), out iRedditoAnnuale))
            {
                redditoValido = true;
            }
            else
            {
                Console.WriteLine("\nInput non valido. Inserisci un valore numerico.");
            }
        }

        Contribuente contribuente = new Contribuente() {
        Nome = iNome,
        Cognome = iCognome,
        DataNascita = iDataNascita,
        CodiceFiscale = iCodiceFiscale,
        Sesso = iSesso,
        ComuneResidenza = iComuneResidenza,
        RedditoAnnuale = iRedditoAnnuale
        };
        CalcolaImposta(contribuente);
    }

        public static void CalcolaImposta(Contribuente contribuente)
        {
            double reddito = contribuente.RedditoAnnuale;

            if (reddito <= 15000)
            {
                contribuente.ImpostaVersare = reddito * 0.23;
            }
            else if (reddito <= 28000)
            {
                contribuente.ImpostaVersare = 3450 + (reddito - 15000) * 0.27;
            }
            else if (reddito <= 55000)
            {
                contribuente.ImpostaVersare = 6960 + (reddito - 28000) * 0.38;
            }
            else if (reddito <= 75000)
            {
                contribuente.ImpostaVersare = 17220 + (reddito - 55000) * 0.41;
            }
            else
            {
                contribuente.ImpostaVersare = 25420 + (reddito - 75000) * 0.43;
            }
            Console.WriteLine();
            Console.WriteLine($"CALCOLO DELL’IMPOSTA DA VERSARE:");
            Console.WriteLine($"\nContribuente: {contribuente.Nome} {contribuente.Cognome},");
            Console.WriteLine($"Nato il {contribuente.DataNascita} ({contribuente.Sesso}),");
            Console.WriteLine($"Residente a {contribuente.ComuneResidenza},");
            Console.WriteLine($"Codice Fiscale: {contribuente.CodiceFiscale.ToUpper()}");
        Console.WriteLine($"Reddito dichiarato: {contribuente.RedditoAnnuale} euro");
        Console.WriteLine("\n|-----------------------------|");
        Console.WriteLine($"|IMPOSTA DA VERSARE: {contribuente.ImpostaVersare} euro|");
        Console.WriteLine("|-----------------------------|");
    }
    }



