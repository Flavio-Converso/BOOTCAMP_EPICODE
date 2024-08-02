SELECT 
CONCAT(A.Nome, ' ', A.Cognome) AS [Nome Completo],  
V.DataTrascrizioneVerbale AS [Data della violazione], 
V.IndirizzoViolazione AS [Indirizzo della violazione], 
V.Importo, 
V.DecurtamentoPunti AS [Punti decurtati]
FROM Anagrafica A
INNER JOIN 
Verbale V ON V.IDAnagrafica = A.IDAnagrafica
WHERE CONVERT(DATE, V.DataTrascrizioneVerbale, 103) BETWEEN '2009-02-01' AND '2009-07-31'
ORDER BY V.DataTrascrizioneVerbale ASC;