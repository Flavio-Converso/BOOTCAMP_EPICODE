﻿using Project.Models;

namespace Project.Services.Management
{
    public interface IRicercheService
    {
        public Task<List<Prenotazione>> GetPrenotazioniByCFAsync(string codiceFiscale);
        public Task<List<Prenotazione>> GetPrenotazioniByTipoPensioneAsync(string tipoPensione);
    }
}
