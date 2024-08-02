namespace Console25_06
{
    public static class CVHelper
    {
        public static CV CreaCV()
        {
            return new CV
            {
                InformazioniPersonali = new InformazioniPersonali
                {
                    Nome = "Mario",
                    Cognome = "Rossi",
                    Telefono = "1234567890",
                    Email = "mario.rossi@example.com"
                },
                StudiEffettuati = new List<Studi>
                {
                    new Studi
                    {
                        Qualifica = "Laurea in Informatica",
                        Istituto = "Università di Roma",
                        Tipo = "Universitario",
                        Dal = new DateTime(2015, 10, 1),
                        Al = new DateTime(2018, 7, 15)
                    },
                    new Studi
                    {
                        Qualifica = "Diploma di Maturità",
                        Istituto = "Liceo Scientifico Galileo Galilei",
                        Tipo = "Secondario",
                        Dal = new DateTime(2010, 9, 1),
                        Al = new DateTime(2015, 6, 30)
                    }
                },
                Impieghi = new List<Impiego>
                {
                    new Impiego
                    {
                        Esperienze = new Esperienza
                        {
                            Azienda = "Tech Solutions",
                            JobTitle = "Software Developer",
                            Dal = new DateTime(2018, 9, 1),
                            Al = new DateTime(2021, 12, 31),
                            Descrizione = "Sviluppo di applicazioni web",
                            Compiti = new List<string>
                            {
                                "Analisi dei requisiti",
                                "Sviluppo del codice",
                                "Test e manutenzione"
                            }
                        }
                    },
                    new Impiego
                    {
                        Esperienze = new Esperienza
                        {
                            Azienda = "InnovaTech",
                            JobTitle = "Senior Developer",
                            Dal = new DateTime(2022, 1, 1),
                            Al = DateTime.Now,
                            Descrizione = "Gestione di progetti di sviluppo software",
                            Compiti = new List<string>
                            {
                                "Coordinamento del team di sviluppo",
                                "Progettazione dell'architettura software",
                                "Revisione del codice",
                                "Supporto e formazione dei nuovi membri del team"
                            }
                        }
                    }
                }
            };
        }
    }
}
