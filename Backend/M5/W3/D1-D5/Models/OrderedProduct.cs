﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE_Project_29_07_02_08.Models
{
    public class OrderedProduct
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdOrderedProduct { get; set; }

        [Required]
        public int Quantity { get; set; }

        // Riferimenti EF
        [Required]
        public int IdOrder { get; set; }

        [ForeignKey("IdOrder")]
        public Order Order { get; set; }

        [Required]
        public int IdProduct { get; set; }

        [ForeignKey("IdProduct")]
        public Product Product { get; set; }
    }
}
