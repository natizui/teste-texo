import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products: Product[];

  cols: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.products = this.productService.getProducts();
      console.log(this.products);
      // products => this.products = products;

      this.cols = [
          { field: 'name', header: 'Produto' },
          { field: 'quantity', header: 'Quantidade' },
          { field: 'price', header: 'Preço' },
          { field: 'isPerishable', header: 'Perecível' },
          { field: 'manifactureDate', header: 'Data de Fabricação' },
          { field: 'expirationDate', header: 'Data de Validade' }
      ];
  }
}
