import { Component, OnInit, Input } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';

// interface Unit {
//   name: string,
// }

import { Product, ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [MessageService]
})
export class ProductFormComponent implements OnInit{

  @Input() model: Product; 

  // units: Unit[];
  units: SelectItem[];
  userform: FormGroup;

  // public get selectedUnit(): Unit {
  //   if(this.model.unit && this.units){
  //     return this.units.find(
  //       e => e.name === this.model.unit        
  //     )
  //   }
  //   return undefined;
  // }
  // public set selectedUnit(value: Unit) {
  //   this.model.unit = value.name;
  // }
  
  constructor(
    private service: ProductService,
    private fb: FormBuilder, 
    private messageService: MessageService
  ) {
    // this.units = [
    //   {name: 'L'},
    //   {name: 'Kg'},
    //   {name: 'Unidade'}
    // ]
  }
  
  ngOnInit(){
    
    this.userform = this.fb.group({
      'name': new FormControl(this.model.name, Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')])),
      'isPerishable': new FormControl(this.model.isPerishable),
      'quantity': new FormControl(this.model.quantity),
      'unit': new FormControl(this.model.unit, Validators.required),
      'price': new FormControl(this.model.price, Validators.required),
      'expirationDate': new FormControl(''),
      'manifactureDate': new FormControl('', Validators.required)
  });

    this.units = [];
        this.units.push({label:'Selecione uma opção', value:''});
        this.units.push({label:'Litro', value:'Litro'});
        this.units.push({label:'Quilograma', value:'Quilograma'});
        this.units.push({label:'Unidade', value:'Unidade'});
  }
  
  

  onSubmit(value: Product) { 
    console.log(value);
    this.model = value;
    if(!this.model.id){
      this.model.id = this.generateId();
    }
    this.service.saveProduct(this.model.id, this.model);
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
  }

  private generateId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2)).toUpperCase();
  }


  get diagnostic() { return JSON.stringify(this.userform.value); }
}
