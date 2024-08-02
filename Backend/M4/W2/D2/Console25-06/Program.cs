using Console25_06;
using System;

namespace Console25_06
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creazione del CV utilizzando il metodo condiviso
            CV mioCV = CVHelper.CreaCV();

            // Stampa del CV
            StampaDettagliCVSuSchermo(mioCV);
        }

        static void StampaDettagliCVSuSchermo(CV cv)
        {
            Console.WriteLine("Informazioni Personali:");
            Console.WriteLine($"Nome: {cv.InformazioniPersonali.Nome}");
            Console.WriteLine($"Cognome: {cv.InformazioniPersonali.Cognome}");
            Console.WriteLine($"Telefono: {cv.InformazioniPersonali.Telefono}");
            Console.WriteLine($"Email: {cv.InformazioniPersonali.Email}");
            Console.WriteLine();

            Console.WriteLine("Studi Effettuati:");
            foreach (var studi in cv.StudiEffettuati)
            {
                Console.WriteLine($"Qualifica: {studi.Qualifica}");
                Console.WriteLine($"Istituto: {studi.Istituto}");
                Console.WriteLine($"Tipo: {studi.Tipo}");
                Console.WriteLine($"Dal: {studi.Dal.ToShortDateString()} Al: {studi.Al.ToShortDateString()}");
                Console.WriteLine();
            }

            Console.WriteLine("Impieghi:");
            foreach (var impiego in cv.Impieghi)
            {
                var esperienza = impiego.Esperienze;
                Console.WriteLine($"Azienda: {esperienza.Azienda}");
                Console.WriteLine($"Job Title: {esperienza.JobTitle}");
                Console.WriteLine($"Dal: {esperienza.Dal.ToShortDateString()} Al: {esperienza.Al.ToShortDateString()}");
                Console.WriteLine($"Descrizione: {esperienza.Descrizione}");
                Console.WriteLine("Compiti:");
                foreach (var compito in esperienza.Compiti)
                {
                    Console.WriteLine($"- {compito}");
                }
                Console.WriteLine();
            }
        }
    }
}
