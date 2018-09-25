import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  name = 'maçã';
  quantity = 1;
  unit = 'kg';
  price = 'R$ 5,00';
  perishable = false;
  expirationDate = '00/00/0000';
  manifactureDate = '00/00/0000';

  constructor() { }

  ngOnInit() {
  }

}
