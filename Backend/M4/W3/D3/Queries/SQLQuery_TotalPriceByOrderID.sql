SELECT OrderID, SUM (UnitPrice * Quantity) AS TotalPriceByOrderID
FROM [Order Details]
GROUP BY OrderID;