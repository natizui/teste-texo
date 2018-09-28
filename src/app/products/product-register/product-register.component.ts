import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  settingsBreadCrumb = {
    breadcrumb: [
      {label: 'Produtos', href: '/produtos', active: false},
      {label: 'Cadastro', href: '/produtos/cadastro', active: true}
    ]
  }
  
  
}
