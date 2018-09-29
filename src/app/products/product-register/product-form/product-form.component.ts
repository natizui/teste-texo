import { Component, OnInit, Input } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';

import { Product, ProductService } from '../../product.service';
import { perishableExpirationDateValidator } from '../../../shared/directives/perishable-expiration-date.directive';
import { manufactureDateValidator } from '../../../shared/directives/manufacture-date.directive';
import { unitRequiredValidator } from '../../../shared/directives/unit-required.directive';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [MessageService]
})
export class ProductFormComponent implements OnInit{

  @Input() model: Product;

  units: SelectItem[];
  productForm: FormGroup;
  selectedUnit: any;
  msgs: any[] = [];

   constructor(
    private service: ProductService,
    private fb: FormBuilder, 
    private messageService: MessageService
  ) {}
  
  ngOnInit(){
    
    this.setForm();

    this.units = [];
      this.units.push({label:'Selecione uma opção', value: null});
      this.units.push({label:'Litro', value:'Lt'});
      this.units.push({label:'Quilograma', value:'Kg'});
      this.units.push({label:'Unidade', value:'Un'});

    this.setSelectedUnit();

  }

  
  
  private setSelectedUnit() {
    this.selectedUnit = this.model.unit;
  }

  private setForm() {
    this.productForm = this.fb.group({
      'name': new FormControl(this.model.name, Validators.compose([
        Validators.required, 
        Validators.maxLength(50), 
        Validators.pattern('[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*')
      ])),
      'isPerishable': new FormControl(this.model.isPerishable),
      'quantity': new FormControl(this.model.quantity),
      'unit': new FormControl(this.model.unit ? this.model.unit : {value: null}, unitRequiredValidator()),
      'price': new FormControl(this.model.price, Validators.required),
      'expirationDate': new FormControl(''),
      'manufactureDate': new FormControl('', Validators.required)
    }, {validator: Validators.compose([
      perishableExpirationDateValidator, manufactureDateValidator
      ])});
  }


  checkIfExpired() {
    const expirationDate = this.productForm.get('expirationDate').value;
    return expirationDate && expirationDate < new Date() 
  }

  onSubmit(value: Product) { 
    value.id = this.model.id;
    this.model = value;
    let isNew = false;
    if(!this.model.id){
      this.model.id = this.generateId();
      isNew = true;
    }
    try {
      this.service.saveProduct(this.model.id, this.model);
      this.msgs = [{severity:'success', detail:'Produto salvo com sucesso!'}];
    } catch (error) {
      this.msgs = [{severity:'error', detail:'Erro ao salvar produto.'}];
    }
    if(isNew){
      this.resetForm();
    }
  }

  private resetForm() {
    this.model = new Product();
    this.setForm();
    this.setSelectedUnit();
  }

  private generateId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2)).toUpperCase();
  }

}
