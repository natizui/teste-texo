import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  units = ['L', 'Kg', 'unidade'];
  
  model = new Product(1, 'maçã', 1, this.units[0], 5, true, new Date(2018, 0, 20), new Date(2018, 0, 1));
  
  onSubmit() { 
    //salvar edição

    //salvar novo
    this.model.id = localStorage.length + 1;
    console.log(localStorage.length);localStorage.setItem(this.model.id.toString(), JSON.stringify(this.model)); 
  }
}
