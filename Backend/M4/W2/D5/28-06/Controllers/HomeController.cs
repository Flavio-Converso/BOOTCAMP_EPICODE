using _28_06.Entities;
using _28_06.Models;
using _28_06.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace _28_06.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IArticoloService<Articolo> _articoloService;
        private readonly IWebHostEnvironment _env;

        public HomeController(ILogger<HomeController> logger, IArticoloService<Articolo> articoloService, IWebHostEnvironment env)
        {
            _logger = logger;
            _articoloService = articoloService;
            _env = env;
        }

        public IActionResult Index()
        {
            return View();
        }
       


        public IActionResult Articoli() 
        {
            var articoli = _articoloService.GetAll();
            return View(articoli); 
        }


        public IActionResult CreaArticoli()
        {
           return View(new Articolo());
        }

        [HttpPost]
        public IActionResult CreaArticoli(Articolo articolo)
        {
            if (ModelState.IsValid)
            {
                var a = new Articolo
                {
                    Descrizione = articolo.Descrizione,
                    Nome = articolo.Nome,
                    Prezzo = articolo.Prezzo,
                    ImgCopertina = articolo.ImgCopertina,
                    ImgProdotto1 = articolo.ImgProdotto1,
                    ImgProdotto2 = articolo.ImgProdotto2
                };

                _articoloService.Create(a);

                string uploads = Path.Combine(_env.WebRootPath, "immagini");

                if (articolo.ImgCopertina != null)
                {
                    string filePath = Path.ChangeExtension(Path.Combine(uploads, a.Id.ToString()), "jpg");
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                        articolo.ImgCopertina.CopyTo(fileStream);
                }

                if (articolo.ImgProdotto1 != null)
                {
                    string filePath = Path.ChangeExtension(Path.Combine(uploads, a.Id.ToString() + "_1"), "jpg");
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                        articolo.ImgProdotto1.CopyTo(fileStream);
                }

                if (articolo.ImgProdotto2 != null)
                {
                    string filePath = Path.ChangeExtension(Path.Combine(uploads, a.Id.ToString() + "_2"), "jpg");
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                        articolo.ImgProdotto2.CopyTo(fileStream);
                }

                return RedirectToAction("Articoli");
            }

            return View(articolo);
        }

        public IActionResult Dettagli(int id)
        {
            var articolo = _articoloService.GetById(id);
            return View(articolo);
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            var articolo = _articoloService.GetById(id);
            _articoloService.Delete(id);

            return RedirectToAction("Articoli");
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
