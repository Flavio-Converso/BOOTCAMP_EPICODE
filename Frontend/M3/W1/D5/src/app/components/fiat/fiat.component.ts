import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss',
})
export class FiatComponent {
  autos!: iAuto[];
  auto!: iAuto;
  brandLogo!: string;
  ngOnInit() {
    this.fetchFiatCars();
  }

  async fetchFiatCars() {
    const res = await fetch('../../../assets/db.json');
    const response = await res.json();
    this.autos = response.filter((auto: iAuto) => auto.brand === 'Fiat');
    this.brandLogo = this.autos[0].brandLogo;
    console.log('macchine Ford', this.autos);
  }
}
