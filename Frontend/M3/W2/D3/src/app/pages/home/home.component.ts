import { Component, OnInit } from '@angular/core';
import { iProdotti } from '../../modules/iprodotti';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  prodotti: iProdotti[] = [];
  preferiti: iProdotti[] = [];

  constructor(private prodottiSvc: ProductsService) {}

  ngOnInit() {
    this.prodottiSvc.getAll().subscribe((data) => {
      this.prodotti = data;
      console.log(this.prodotti);
    });
    this.preferiti = this.prodottiSvc.getFavorites();
  }

  aggiungiPreferito(prodotto: iProdotti) {
    this.prodottiSvc.addFavorite(prodotto);
    this.preferiti = this.prodottiSvc.getFavorites();
    console.log(this.preferiti);
  }
}
