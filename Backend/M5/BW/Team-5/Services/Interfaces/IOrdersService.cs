﻿using Team_5.Models.Pharmacy;

namespace Team_5.Services.Interfaces
{
    public interface IOrdersService
    {
        Task<Orders> CreateOrder(Orders orders, string cf);
        Task<List<Orders>> GetOrders();
        Task<List<Products>> GetAllProducts();
        Task<Orders> DeleteOrders(int id);
    }
}
