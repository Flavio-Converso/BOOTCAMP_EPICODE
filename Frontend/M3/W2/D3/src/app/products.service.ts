import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProdotti } from './modules/iprodotti';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl: string = 'https://dummyjson.com/products';
  private preferiti: iProdotti[] = [];

  constructor(private http: HttpClient) {}

  // Get all products
  getAll(): Observable<iProdotti[]> {
    return this.http
      .get<{ products: iProdotti[] }>(this.apiUrl)
      .pipe(map((response) => response.products));
  }

  // Add a product to favorites
  addFavorite(prodotto: iProdotti): void {
    if (!this.preferiti.some((p) => p.id === prodotto.id)) {
      this.preferiti.push(prodotto);
    }
  }

  // Get all favorite products
  getFavorites(): iProdotti[] {
    return this.preferiti;
  }
}
