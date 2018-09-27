import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductFormComponent } from './products/product-register/product-form/product-form.component';
import { ProductsTableComponent } from './products/product-list/products-table/products-table.component';
import { BreadCrumbComponent } from './shared/bread-crumb/bread-crumb.component';
import { ProductRegisterComponent } from './products/product-register/product-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductsTableComponent,
    BreadCrumbComponent,
    ProductRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
