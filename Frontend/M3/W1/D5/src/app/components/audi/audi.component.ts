import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss',
})
export class AudiComponent {
  autos!: iAuto[];
  auto!: iAuto;
  brandLogo!: string;
  ngOnInit() {
    this.fetchFiatCars();
  }

  async fetchFiatCars() {
    const res = await fetch('../../../assets/db.json');
    const response = await res.json();
    this.autos = response.filter((auto: iAuto) => auto.brand === 'Audi');
    this.brandLogo = this.autos[0].brandLogo;
    console.log('macchine Ford', this.autos);
  }
}
