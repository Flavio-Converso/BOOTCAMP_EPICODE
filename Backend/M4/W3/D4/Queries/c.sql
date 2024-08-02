SELECT CONCAT(Nome, ' ', Cognome) AS ImpiegatoConDetrazione
FROM Impiegato
WHERE DetrazioneFiscale = 1;