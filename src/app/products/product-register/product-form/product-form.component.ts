import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';
import * as Observable from 'rxjs/internal/Observable/fromEvent';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Product, ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [MessageService]
})
export class ProductFormComponent implements OnInit, AfterViewInit{

  @Input() model: Product;
  
  @ViewChild('expiration') expiration: ElementRef;

  units: SelectItem[];
  productForm: FormGroup;
  teste: EventEmitter<any>;

   constructor(
    private service: ProductService,
    private fb: FormBuilder, 
    private messageService: MessageService
  ) {}
  
  ngOnInit(){
    
    this.setForm();

    this.units = [];
        this.units.push({label:'Selecione uma opção', value:''});
        this.units.push({label:'Litro', value:'Litro'});
        this.units.push({label:'Quilograma', value:'Quilograma'});
        this.units.push({label:'Unidade', value:'Unidade'});
  }
  
  private setForm() {
    this.productForm = this.fb.group({
      'name': new FormControl(this.model.name, Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')])),
      'isPerishable': new FormControl(this.model.isPerishable),
      'quantity': new FormControl(this.model.quantity),
      'unit': new FormControl(this.model.unit, Validators.required),
      'price': new FormControl(this.model.price, Validators.required),
      'expirationDate': new FormControl(''),
      'manifactureDate': new FormControl('', Validators.required)
    });
  }

  ngAfterViewInit() {
    Observable.fromEvent(this.expiration.nativeElement, 'oninput')
              .pipe(debounceTime(100), distinctUntilChanged())
    //           .subscribe(() => {
    //             this.checkIfExpired(this.expiration.nativeElement.value);
    //           });

    // this.teste.subscribe(() => console.log("agora vai!"))
  }
  checkIfExpired(value: any): any {
    console.log(value)
  }

  onSubmit(value: Product) { 
    value.id = this.model.id;
    this.model = value;
    let isNew = false;
    if(!this.model.id){
      this.model.id = this.generateId();
      isNew = true;
    }
    this.service.saveProduct(this.model.id, this.model);
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
    if(isNew){
      this.resetForm();
    }
  }

  private resetForm() {
    this.model = new Product();
    this.setForm();
  }

  private generateId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2)).toUpperCase();
  }


  get diagnostic() { return JSON.stringify(this.productForm.value); }
}
