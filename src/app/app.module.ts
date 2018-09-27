import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {MenuModule} from 'primeng/menu';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductFormComponent } from './products/product-register/product-form/product-form.component';
import { ProductsTableComponent } from './products/product-list/products-table/products-table.component';
import { BreadCrumbComponent } from './shared/bread-crumb/bread-crumb.component';
import { ProductRegisterComponent } from './products/product-register/product-register.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProductService } from './products/product.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductsTableComponent,
    BreadCrumbComponent,
    ProductRegisterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CalendarModule,
    MenuModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    CheckboxModule,
    PanelModule,
    DropdownModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
