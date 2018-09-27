import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


import { Product, ProductService } from '../../product.service';

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
    this.loadProductForEdit();
  }
  
  private loadProductForEdit() {
    const isEditing = this.router.isActive('/produto', false);
    if (isEditing) {
      this.product$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getProduct(params.get('id'))));
      this.product$.subscribe(prod => this.model = prod);
    }
  }

  onSubmit() { 
    this.model.id = this.generateId();
    this.service.saveProduct(this.model.id, this.model);
    console.log(this.model);
  }

  private generateId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2)).toUpperCase();
  }
}
