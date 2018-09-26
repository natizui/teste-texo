import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductListComponent 
  },
  { 
    path: 'cadastro', 
    component: ProductFormComponent,
  },
  { 
    path: 'produto/:id', 
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
