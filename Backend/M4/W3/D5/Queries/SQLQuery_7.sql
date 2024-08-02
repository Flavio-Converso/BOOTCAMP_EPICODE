SELECT CONCAT(A.Nome, ' ', A.Cognome) AS [Nome Completo],  
SUM(V.Importo) AS [Totale Importi]
FROM Anagrafica A
INNER JOIN 
Verbale V ON V.IDAnagrafica = A.IDAnagrafica
GROUP BY 
CONCAT(A.Nome, ' ', A.Cognome)
ORDER BY 
[Nome Completo] ASC;
