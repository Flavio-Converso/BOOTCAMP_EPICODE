SELECT 
DataViolazione AS [Data della violazione],
Importo,
DecurtamentoPunti AS [Decurtamento punti]
FROM Verbale
WHERE CONVERT(DATE, DataViolazione) = '2009-06-17';