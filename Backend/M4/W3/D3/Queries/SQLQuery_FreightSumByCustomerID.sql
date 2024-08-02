SELECT SUM(Freight) AS FreightSumByCustomerID
FROM Orders
GROUP BY CustomerID;