import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product, ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {

  items: MenuItem[];
  home: MenuItem;
  model = new Product();
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    ) { }

  ngOnInit() {
    const isRegistering = this.router.isActive('/produtos/cadastro', false);
    if (isRegistering) {
      this.items = [
        {label:'Produtos', routerLink:['/produtos']},
        {label:'Cadastro'}
      ]
    } else {
      this.loadProductForEdit();
      this.items = [
        {label:'Produtos', routerLink:['/produtos']},
        {label:this.model.name}
      ]
    }
        
    this.home = {icon: 'pi pi-home'};
  }

  private loadProductForEdit() {
    this.product$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getProduct(params.get('id'))));
    this.product$.subscribe(
      prod => {
        prod ? this.model = prod : ''; //to make sure that model is mot null
      }
    );
  }

 
  
}
