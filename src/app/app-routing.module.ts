import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductRegisterComponent } from './products/product-register/product-register.component';

const routes: Routes = [
  { 
    path: 'produtos', 
    component: ProductListComponent 
  },
  { 
    path: '', 
    redirectTo: '/produtos' ,
    pathMatch: 'full'
  },
  { 
    path: 'produtos/cadastro', 
    component: ProductRegisterComponent,
  },
  { 
    path: 'produtos/:id', 
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
