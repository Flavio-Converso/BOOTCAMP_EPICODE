using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _19_06
{
    public class ContoCorrente
    {
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public string FullName { get { return $"{Nome} {Cognome}"; } }
        public double Saldo { get; set; }
        private double _saldoIniziale = 0;
        public bool ContoAperto { get; set; }
        private bool _contoAperto = false;

        public void Benvenuto()
        {
            Console.WriteLine("Benvenuto nella tua banca");
            Console.WriteLine("\nDigita 1 per aprire un conto");
            Console.WriteLine("Digita 2 per eseguire un versamento");
            Console.WriteLine("Digita 3 per eseguire un prelievo");
            int numero = int.Parse(Console.ReadLine());
            if (numero == 1)
            {
                ApriConto();
            }
            else if (numero == 2)
            {
                Versamento();
            }
            else if (numero == 3)
            {
                Prelievo();
            }else
            {
                Console.WriteLine("\nScelta non valida");
                Benvenuto();
            }
        }

        public void ApriConto()
        {
            if (_contoAperto == false)
            {
                Console.WriteLine("\nInserisci il tuo nome");
                Nome = Console.ReadLine();
                Console.WriteLine("\nInserisci il tuo cognome");
                Cognome = Console.ReadLine();
                Saldo = _saldoIniziale;
                Console.WriteLine($"\nIl conto è stato aperto con successo a nome {FullName}");
                _contoAperto = true;
                Prosegui();
            }
            else
            {
                Console.WriteLine("\nIl conto è già aperto.");
                Prosegui();
            }
        }


        public void Prosegui()
        {
            if (_contoAperto == true)
                Console.WriteLine($"Cosa vuoi fare, {Nome}?");
            Console.WriteLine("Digita 1 per eseguire un versamento");
            Console.WriteLine("Digita 2 per eseguire un prelievo");
            int numero = int.Parse(Console.ReadLine());
            if (numero == 1)
            {
                Versamento();
            }
            else if (numero == 2)
            {
                Prelievo();
            }
            else
            {
                Console.WriteLine("\nScelta non valida");
                Prosegui();
            }
        }


        public void Versamento() {
            if (_contoAperto == true) {
                Console.WriteLine("\nInserisci l'importo del versamento");
                double importo = double.Parse(Console.ReadLine());
                if (importo <1000)
                {
                    Console.WriteLine("\nL'importo non può essere minore di 1000");
                    Versamento();
                }
                Saldo += importo;
                Console.WriteLine($"\nIl tuo saldo attuale è di {Saldo}");
                Prosegui();
            }
            else{
                Console.WriteLine("\nIl conto non è aperto.");
                Benvenuto();
            }
        }
        public void Prelievo() {
            if (_contoAperto==true && Saldo ==0) {
                Console.WriteLine("\nNon hai abbastanza soldi sul conto per prelevare.");
                Prosegui();
            }
            else if (_contoAperto == true){ 
                Console.WriteLine("\nInserisci l'importo del prelievo");
                double importo = double.Parse(Console.ReadLine());
                if (importo > Saldo)
                {
                    Console.WriteLine("\nNon puoi prelevare più di quanto hai sul conto");
                    Prosegui();
                }
                Saldo -= importo;
                Console.WriteLine($"\nIl tuo saldo attuale è di {Saldo}");
                Prosegui();
            }
            else
            {
                Console.WriteLine("\nIl conto non è aperto.");
                Benvenuto();
            }
        }


    }
}
