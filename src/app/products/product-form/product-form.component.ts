import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

  units = ['L', 'Kg', 'unidade'];
  
  model = new Product();

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}
  
  ngOnInit(){
    const href = this.router.url;
    const re = /[0-9]$/;
    const result = href.match(re);
    if(result){
      //takes the id passed by the route map and uses it to get the product that has that id
      this.product$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
        this.service.getProduct(params.get('id')))
      );
      //update model with product data if necessary
      this.product$.subscribe(prod => this.model = prod);
    }
  }
  
  onSubmit() { 
    const key = (localStorage.length + 1).toString();
    this.service.saveProduct(key, this.model);
    // localStorage.setItem(this.model.id.toString(), JSON.stringify(this.model)); 
  }
}
