SELECT 
CONCAT(Nome, ' ', Cognome) AS [Abitanti Palermo],
Indirizzo,
CAP,
Cod_Fisc AS [Codice Fiscale]
FROM Anagrafica
WHERE Città = 'Palermo'
ORDER BY Nome ASC;