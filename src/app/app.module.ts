import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import localeBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

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
import {BreadcrumbModule} from 'primeng/breadcrumb';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductFormComponent } from './products/product-register/product-form/product-form.component';
import { ProductTableComponent } from './products/product-list/product-table/product-table.component';
import { ProductRegisterComponent } from './products/product-register/product-register.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProductService } from './products/product.service';
import { BooleanPipe } from './shared/pipes/boolean/boolean.pipe';

registerLocaleData(localeBr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductTableComponent,
    ProductRegisterComponent,
    MenuComponent,
    BooleanPipe
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
    DropdownModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    CurrencyMaskModule 
  ],
  providers: [
    ProductService,
    { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
