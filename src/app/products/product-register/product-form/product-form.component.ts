import { Component, OnInit, Input } from '@angular/core';

interface Unit {
  name: string,
}

import { Product, ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

  @Input() model: Product; 

  units: Unit[];

  public get selectedUnit(): Unit {
    if(this.model.unit && this.units){
      return this.units.find(
        e => e.name === this.model.unit        
      )
    }
    return undefined;
  }
  public set selectedUnit(value: Unit) {
    this.model.unit = value.name;
  }
  
  constructor(
    private service: ProductService,
  ) {
    this.units = [
      {name: 'L'},
      {name: 'Kg'},
      {name: 'Unidade'}
    ]
  }
  
  ngOnInit(){
  }
  
  

  onSubmit() { 
    if(!this.model.id){
      this.model.id = this.generateId();
    }
    this.service.saveProduct(this.model.id, this.model);
    console.log(this.model);
  }

  private generateId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2)).toUpperCase();
  }
}
