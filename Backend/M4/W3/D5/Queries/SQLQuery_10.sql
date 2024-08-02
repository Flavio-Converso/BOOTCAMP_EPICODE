SELECT 
V.Nominativo_Agente AS [Nominativo Agente],  
COUNT(*) AS [Numero Violazioni Contestate]
FROM Verbale V
GROUP BY V.Nominativo_Agente
ORDER BY [Numero Violazioni Contestate] DESC;