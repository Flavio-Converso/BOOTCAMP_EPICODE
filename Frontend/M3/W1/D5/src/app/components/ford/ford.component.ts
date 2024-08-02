import { Component } from '@angular/core';
import { iAuto } from '../../models/i-auto';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss',
})
export class FordComponent {
  autos!: iAuto[];
  auto!: iAuto;
  brandLogo!: string;
  ngOnInit() {
    this.fetchFordCars();
  }

  async fetchFordCars() {
    const res = await fetch('../../../assets/db.json');
    const response = await res.json();
    this.autos = response.filter((auto: iAuto) => auto.brand === 'Ford');
    this.brandLogo = this.autos[0].brandLogo;
    console.log('macchine Ford', this.autos);
  }
}
