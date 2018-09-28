import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  
  model = new Product();

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
  ) {
    this.units = [
      {name: 'L'},
      {name: 'Kg'},
      {name: 'Unidade'}
    ]
  }
  
  ngOnInit(){
    this.loadProductForEdit();
  }
  
  private loadProductForEdit() {
    const isRegistering = this.router.isActive('/produtos/cadastro', false);
    if (!isRegistering) {
      this.product$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getProduct(params.get('id'))));
      this.product$.subscribe(prod => this.model = prod);
    }
    console.log(this.model);
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
