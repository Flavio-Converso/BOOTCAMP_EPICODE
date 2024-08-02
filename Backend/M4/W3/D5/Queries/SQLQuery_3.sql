SELECT Vio.Descrizione AS [Tipo Violazione],
COUNT(*) AS [Numero Verbali]
FROM Verbale V
INNER JOIN 
Violazione Vio ON V.IDViolazione = Vio.IDViolazione
GROUP BY 
Vio.Descrizione;
