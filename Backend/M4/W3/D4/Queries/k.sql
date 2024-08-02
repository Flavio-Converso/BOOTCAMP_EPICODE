SELECT CONCAT(Nome, ' ', Cognome) AS [Impiegato 2007-2008]
FROM Impiegato 
INNER JOIN Impiego  ON Impiego.IDImpiego = Impiegato.IDImpiego
WHERE Impiego.Assunzione BETWEEN '2007-01-01' AND '2008-01-01';