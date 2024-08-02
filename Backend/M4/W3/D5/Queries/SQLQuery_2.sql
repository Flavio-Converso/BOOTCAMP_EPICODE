SELECT 
CONCAT(A.Nome, ' ', A.Cognome) AS [Nome Completo],
COUNT(V.IDVerbale) AS [Numero Verbali] 
FROM Verbale V 
INNER JOIN 
Anagrafica A ON V.IDAnagrafica = A.IDAnagrafica
GROUP BY 
CONCAT(A.Nome, ' ', A.Cognome);
