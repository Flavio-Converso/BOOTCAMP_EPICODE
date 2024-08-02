SELECT c.CategoryName, COUNT(p.ProductID) AS TotalProductsbyCategory
FROM Products AS p
JOIN Categories AS c ON p.CategoryID = c.CategoryID
GROUP BY c.CategoryName;
