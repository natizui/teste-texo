import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-register/product-form/product-form.component';
import { ProductRegisterComponent } from './products/product-register/product-register.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductListComponent 
  },
  { 
    path: 'cadastro', 
    component: ProductRegisterComponent,
  },
  { 
    path: 'produto/:id', 
    component: ProductRegisterComponent
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
