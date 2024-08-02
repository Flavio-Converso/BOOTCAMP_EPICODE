SELECT ShipCountry, COUNT(OrderID) AS TotalOrdersbyCountry
FROM Orders
GROUP BY ShipCountry;
