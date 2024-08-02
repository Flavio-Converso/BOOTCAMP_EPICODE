using _24_06.Models;

namespace _24_06
{
    public class Menu
    {  public static List<MenuModel> MenuItems { get; } = new List<MenuModel>
        {
            new MenuModel { Name = "Coca Cola", Prezzo = 2.50m },
            new MenuModel { Name = "Insalata di pollo", Prezzo = 5.20m },
            new MenuModel { Name = "Pizza Margherita", Prezzo = 10.00m },
            new MenuModel { Name = "Pizza 4 Formaggi", Prezzo = 12.50m },
            new MenuModel { Name = "Patatine Fritte", Prezzo = 3.50m },
            new MenuModel { Name = "Insalata di riso", Prezzo = 8.00m },
            new MenuModel { Name = "Frutta di stagione", Prezzo = 5.00m },
            new MenuModel { Name = "Pizza Fritta", Prezzo = 5.00m },
            new MenuModel { Name = "Piadina vegetariana", Prezzo = 6.00m },
            new MenuModel { Name = "Panino Hamburger", Prezzo = 7.90m }
        };
    }
}
