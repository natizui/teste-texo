import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    const products = [];
    for (let i = 0; i < localStorage.length; ++i) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        products.push(value);
    }
    return products;
  }

}




