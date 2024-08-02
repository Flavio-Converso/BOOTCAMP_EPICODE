SELECT CONCAT(A.Nome, ' ', A.Cognome) AS [Nome Completo], 
SUM(V.DecurtamentoPunti) AS [Totale Punti Decurtati]
FROM 
Verbale V
INNER JOIN Anagrafica A ON V.IDAnagrafica = A.IDAnagrafica
GROUP BY 
CONCAT(A.Nome, ' ', A.Cognome);
