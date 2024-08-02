SELECT 
CONCAT(A.Nome, ' ', A.Cognome) AS [Nome Completo],  
V.DataViolazione AS [Data della violazione], 
V.IndirizzoViolazione AS [Indirizzo della violazione], 
V.Importo, 
V.DecurtamentoPunti AS [Punti decurtati]
FROM Anagrafica A
INNER JOIN 
Verbale V ON V.IDAnagrafica = A.IDAnagrafica
WHERE V.DecurtamentoPunti > 5