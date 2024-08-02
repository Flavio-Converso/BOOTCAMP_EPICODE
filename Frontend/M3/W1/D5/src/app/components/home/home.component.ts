import { Component, OnInit } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // Corretto: styleUrls al plurale
})
export class HomeComponent implements OnInit {
  autos!: iAuto[];
  uniqueBrandLogos!: string[];
  randomAutos!: iAuto[];
  ngOnInit() {
    this.fetchCars();
  }

  async fetchCars() {
    const res = await fetch('../../../assets/db.json');
    const response = await res.json();
    this.autos = response;
    this.filterBrandLogos();
    this.getRandomAuto();
    console.log('Array macchine', this.autos);
  }

  filterBrandLogos() {
    this.uniqueBrandLogos = [];

    this.autos.forEach((auto) => {
      if (!this.uniqueBrandLogos.includes(auto.brandLogo)) {
        this.uniqueBrandLogos.push(auto.brandLogo);
      }
    });
    console.log('immagini macchine', this.uniqueBrandLogos);
  }

  getRandomAuto() {
    this.randomAutos = [];
    for (let i = 0; i < 2; i++) {
      let randomIndex, selectedAuto;
      do {
        randomIndex = Math.floor(Math.random() * this.autos.length);
        selectedAuto = this.autos[randomIndex];
      } while (this.randomAutos.includes(selectedAuto));
      this.randomAutos.push(selectedAuto);
    }
    console.log('2 macchine random', this.randomAutos);
  }
}
