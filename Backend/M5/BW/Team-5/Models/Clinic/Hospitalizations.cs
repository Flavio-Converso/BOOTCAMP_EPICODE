﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team_5.Models.Clinic
{
    public class Hospitalizations//ricovero
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdHospitalization { get; set; }

        [Required]
        public required bool IsHospitalized { get; set; }

        [Required(ErrorMessage = "La data di ricovero è obbligatoria.")]
        public DateTime HospDate { get; set; }

        //RIFERIMENTI EF
        [Required(ErrorMessage = "Seleziona l'animale.")]
        public int AnimalId { get; set; }

        [ForeignKey(nameof(AnimalId))]
        public Animals Animal { get; set; }

    }
}
