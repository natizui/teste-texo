import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

  units = ['L', 'Kg', 'unidade'];
  
  model = new Product(1, 'maçã', 1, null, 5, false, null, new Date(2018, 0, 1));

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}
  
  ngOnInit(){
    
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.service.getProduct(params.get('id')))
    );

    this.product$.subscribe(prod => this.model = prod);

  }
  
  onSubmit() { 
    //salvar edição

    //salvar novo
    this.model.id = localStorage.length + 1;
    localStorage.setItem(this.model.id.toString(), JSON.stringify(this.model)); 
  }
}
