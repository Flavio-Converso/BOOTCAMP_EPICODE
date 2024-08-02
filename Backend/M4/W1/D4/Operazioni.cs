using System;

namespace _20_06
{
    internal class Accesso
    {
        public string Username { get; set; }
        public DateTime LoginTime { get; set; }
    }

    internal class Operazione
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ConfermaPassword { get; set; }
        public bool IsLoggedIn { get; set; }
        private bool _isLoggedIn = false;

        public static Accesso[] _accessi = new Accesso[100]; // Array di Accesso
        private static int _numeroAccessi = 0;
        private DateTime? LastLoginTime { get; set; }

        public void Benvenuto()
        {
            Console.WriteLine("Benvenuto, " + Username);
            Console.WriteLine("Digita 1 per fare il login");
            Console.WriteLine("Digita 2 per fare il logout");
            Console.WriteLine("Digita 3 per verificare il numero di accessi");
            Console.WriteLine("Digita 4 per verificare se c'è un utente loggato");
            Console.WriteLine("Digita 5 per uscire");

            int scelta = int.Parse(Console.ReadLine());
            if (scelta == 1)
            {
                Login();
            }
            else if (scelta == 2)
            {
                Logout();
            }
            else if (scelta == 3)
            {
                NumeroAccessi();
            }
            else if (scelta == 4)
            {
                Verifica();
            }
            else if (scelta == 5)
            {
                Esci();
            }
            else
            {
                Console.WriteLine("Scelta non valida");
                Benvenuto();
            }
        }

        public void Login()
        {
            if (_isLoggedIn == false)
            {
                Console.WriteLine("Inserisci il tuo username:");
                string username = Console.ReadLine();
                Console.WriteLine("Inserisci la tua password:");
                string password = Console.ReadLine();
                Console.WriteLine("Conferma la tua password:");
                string confermaPassword = Console.ReadLine();

                if (password == confermaPassword)
                {
                    _isLoggedIn = true;
                    Username = username;
                    Password = password;
                    ConfermaPassword = confermaPassword;
                    LastLoginTime = DateTime.Now;

                    // Aggiungi l'utente nell'array di accessi
                    if (_numeroAccessi < _accessi.Length)
                    {
                        _accessi[_numeroAccessi] = new Accesso
                        {
                            Username = username,
                            LoginTime = LastLoginTime.Value
                        };
                        _numeroAccessi++;
                    }
                    else
                    {
                        Console.WriteLine("Capacità massima degli accessi raggiunta");
                    }

                    Console.WriteLine("Login avvenuto con successo - " + LastLoginTime.Value);
                    Benvenuto();
                }
                else
                {
                    Console.WriteLine("Le password non coincidono, riprova");
                    Login();
                }
            }
            else
            {
                Console.WriteLine("Sei già loggato");
                Benvenuto();
            }
        }

        public void Logout()
        {
            if (_isLoggedIn == true)
            {
                _isLoggedIn = false;
                Username = null;
                Password = null;
                ConfermaPassword = null;
                Console.WriteLine("Logout effettuato con successo");
                Benvenuto();
            }
            else
            {
                Console.WriteLine("Non sei loggato");
                Benvenuto();
            }
        }

        public void NumeroAccessi()
        {
            Console.WriteLine("Il numero di accessi è: " + _numeroAccessi);
            for (int i = 0; i < _numeroAccessi; i++)
            {
                Console.WriteLine((i + 1) + ". " + _accessi[i].Username + " - " + _accessi[i].LoginTime);
            }
            Benvenuto();
        }

        public void Esci()
        {
            Console.WriteLine("Arrivederci");
        }

        public void Verifica()
        {
            if (_isLoggedIn == true)
            {
                Console.WriteLine("C'è un utente loggato");
                Benvenuto();
            }
            else
            {
                Console.WriteLine("Nessuno è loggato");
                Benvenuto();
            }
        }
    }
}
