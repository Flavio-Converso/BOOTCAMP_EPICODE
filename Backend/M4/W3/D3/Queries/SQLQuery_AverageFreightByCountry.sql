SELECT ShipCountry, AVG(Freight) AS AverageFreightByCountry
FROM Orders
GROUP BY ShipCountry