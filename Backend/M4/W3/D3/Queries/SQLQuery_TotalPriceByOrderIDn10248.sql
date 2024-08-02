SELECT OrderID, SUM(UnitPrice * Quantity) AS TotalPriceByOrderIDn10248
FROM [Order Details]
WHERE OrderID = 10248
GROUP BY OrderID
