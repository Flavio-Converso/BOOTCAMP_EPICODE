﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Project.Services.Management;

namespace Project.Controllers.Management
{
    [Authorize]
    public class ManagementVisualizzazioniController : Controller
    {
        private readonly IVisualizzaCreazioniService _visualizzaCreazioniService;
        public ManagementVisualizzazioniController(IVisualizzaCreazioniService visualizzaCreazioniService)
        {
            _visualizzaCreazioniService = visualizzaCreazioniService;
        }
        public IActionResult VisualizzaPersone()
        {
            var persone = _visualizzaCreazioniService.GetAllPersone();
            return View(persone);
        }
        public IActionResult VisualizzaCamere()
        {
            var camere = _visualizzaCreazioniService.GetAllCamere();
            return View(camere);
        }
        public IActionResult VisualizzaPrenotazioni()
        {
            var prenotazioni = _visualizzaCreazioniService.GetAllPrenotazioni();
            return View(prenotazioni);
        }

    }
}
