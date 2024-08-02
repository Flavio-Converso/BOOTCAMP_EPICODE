using _26_06.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace _26_06.Controllers
{
    public class HomeController : Controller
    {
        private static List<Sala> Sale = new List<Sala>
        {
            new Sala { NomeSala = "SalaEst", PostiTotali = 120, PostiOccupati = 0, PostiRidotti = 0 },
            new Sala { NomeSala = "SalaSud", PostiTotali = 120, PostiOccupati = 0, PostiRidotti = 0 },
            new Sala { NomeSala = "SalaNord", PostiTotali = 120, PostiOccupati = 0, PostiRidotti = 0 },
            new Sala { NomeSala = "SalaOvest", PostiTotali = 120, PostiOccupati = 0, PostiRidotti = 0 }
        };

        [HttpGet]
        public IActionResult Index()
        {
            var viewModel = new IndexViewModel
            {
                Sale = Sale,
                Biglietto = new Biglietto { Sala = new Sala() }
            };
            return View(viewModel);
        }

        [HttpPost]
        public IActionResult Prenota(IndexViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                // Trova la sala selezionata nella lista statica
                var salaSelezionata = Sale.FirstOrDefault(s => s.NomeSala == viewModel.Biglietto.Sala.NomeSala);

                if (salaSelezionata != null)
                {
                    // Aggiorna i posti occupati della sala
                    salaSelezionata.PostiOccupati++;

                    // Aggiorna i posti ridotti se il biglietto è di tipo Ridotto
                    if (viewModel.Biglietto.Tipo == TipoBiglietto.Ridotto)
                    {
                        salaSelezionata.PostiRidotti++;
                    }

                    // Salva qui il biglietto nel tuo sistema o nel database, se necessario

                    // Redirect all'azione di conferma o ad altre azioni necessarie
                    return RedirectToAction(nameof(Index));
                }
            }

            // Se il modello non è valido, torna alla vista Index con gli errori
            viewModel.Sale = Sale; // Riassegna le sale per visualizzarle di nuovo nel form
            return View("Index", viewModel);
        }

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
