SELECT CONCAT(Nome, ' ', Cognome) AS ImpiegatoStartsWithG
FROM Impiegato
WHERE Cognome  LIKE 'G%'
ORDER BY Cognome ASC;