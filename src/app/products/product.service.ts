import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  //returns everything stored on local storage as an array of JS objects
  getProducts() {
    const products = [];
    for (let i = 0; i < localStorage.length; ++i) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        products.push(value);
    }
    return products;
  }

  //returns the product with that id
  getProduct(id){
    const subject = new BehaviorSubject<any>([]);
    subject.next(JSON.parse(localStorage.getItem(id)));
    return subject.asObservable(); 
  }

  //saves new product or update existent
  saveProduct(key, product){
    localStorage.setItem(key, JSON.stringify(product));
  }

}




