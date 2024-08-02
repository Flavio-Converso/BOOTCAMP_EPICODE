SELECT City, COUNT (*) AS CustomerByCity
FROM Customers
GROUP BY City;