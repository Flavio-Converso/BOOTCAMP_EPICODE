import { Component, OnInit } from '@angular/core';
import { iProdotti } from '../../modules/iprodotti';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss'],
})
export class PreferitiComponent implements OnInit {
  preferiti: iProdotti[] = [];

  constructor(private prodottiSvc: ProductsService) {}

  ngOnInit() {
    this.preferiti = this.prodottiSvc.getFavorites();
    this.preferiti.sort((a, b) => a.id - b.id);
    console.log(this.preferiti);
  }
}
