import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Product, ProductService } from '../../product.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import * as Observable from 'rxjs/internal/Observable/fromEvent';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
  providers: [ConfirmationService]
})
export class ProductsTableComponent implements OnInit, AfterViewInit {

  @ViewChild('search') search: ElementRef;

  products: Product[];
  tableProducts: Product[];
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
        { header: '', isAction: true, width: '60px'},
        { field: 'name', header: 'Produto', isGeneral:true, width: '100px'},
        { field: 'quantity', header: 'Quantidade', isGeneral:true, width: '100px'},
        { field: 'unit', header: 'Unidade', isGeneral:true, width: '100px'},
        { field: 'price', header: 'Preço', isCurrency: true, width: '100px'},
        { field: 'isPerishable', header: 'Perecível', isBoolean: true, width: '100px'},
        { field: 'manufactureDate', header: 'Data de Fabricação', isDate: true, width: '100px'},
        { field: 'expirationDate', header: 'Data de Validade', isDate: true, width: '100px'},
      ];
  }

  ngAfterViewInit() {
    Observable.fromEvent(this.search.nativeElement, 'keyup')
              .pipe(debounceTime(100), distinctUntilChanged())
              .subscribe(() => {
                this.searchTableProduct(this.search.nativeElement.value);
              })
  }
  searchTableProduct(value: string) {
    if(value !== ''){
      this.tableProducts = this.products.filter(p => {
        const searchParams = (p.name + p.unit).toLowerCase();
        return searchParams.indexOf(value.toLowerCase()) >= 0;
      })
    } else {
      this.tableProducts = this.products;
    }
  }

  private updatePage() {
    this.products = this.productService.getProducts();
    this.tableProducts = this.products;
  }

  confirm(product: Product){
    this.confirmationService.confirm({
      message: `Excluir ${product.name}?`,
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        try {
          this.productService.deleteProduct(product.id);
          this.updatePage();
          this.msgs = [{severity:'success', detail:'Produto excluído'}];
        } catch (error) {
          this.msgs = [{severity:'error', detail:'Erro ao excluir'}];
        }
      }
    });
  }
}
