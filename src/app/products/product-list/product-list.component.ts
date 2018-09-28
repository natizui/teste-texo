import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: MenuItem[];
  home: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Produtos'}
    ]
    
    this.home = {icon: 'pi pi-home'};
  }

  // settingsBreadCrumb = {
  //   breadcrumb: [
  //     {label: 'Produtos', href: '/produtos', active: true}
  //   ]
  // }

}
