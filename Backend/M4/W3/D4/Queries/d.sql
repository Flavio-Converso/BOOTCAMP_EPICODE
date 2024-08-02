SELECT CONCAT(Nome, ' ', Cognome) AS ImpiegatoSenzaDetrazione
FROM Impiegato
WHERE DetrazioneFiscale = 0;