import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../product.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
  providers: [ConfirmationService]
})
export class ProductsTableComponent implements OnInit {

  products: Product[];

  cols: any[];

  msgs: any[] = [];

  constructor(
    private productService: ProductService, 
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
      this.updatePage();
      console.log(this.products);

      this.cols = [
          { field: 'name', header: 'Produto' },
          { field: 'quantity', header: 'Quantidade' },
          { field: 'unit', header: 'Unidade' },
          { field: 'price', header: 'Preço' },
          { field: 'isPerishable', header: 'Perecível', isBoolean: true },
          { field: 'manifactureDate', header: 'Data de Fabricação', isDate: true },
          { field: 'expirationDate', header: 'Data de Validade', isDate: true }
      ];
  }

  private updatePage() {
    this.products = this.productService.getProducts();
  }

  confirm(product: Product){
    this.confirmationService.confirm({
      message: `Excluir ${product.name}?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.productService.deleteProduct(product.id);
        this.updatePage();
        this.msgs = [{severity:'info', detail:'Produto excluído'}];
      }
    });
  }
}
