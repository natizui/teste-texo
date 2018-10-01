import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../../app-routing.module';
import { ProductFormComponent } from '../../products/product-register/product-form/product-form.component';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { ProductRegisterComponent } from '../../products/product-register/product-register.component';
import { ProductsTableComponent } from '../../products/product-list/products-table/products-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { BooleanPipe } from '../pipes/boolean/boolean.pipe';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { APP_BASE_HREF } from '@angular/common';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MenuComponent,
        ProductFormComponent,
        ProductListComponent,
        ProductRegisterComponent,
        ProductsTableComponent,
        BooleanPipe 
      ],
      imports: [
        MenuModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MessagesModule,
        MessageModule,
        CheckboxModule,
        DropdownModule,
        CurrencyMaskModule,
        CalendarModule,
        PanelModule,
        BreadcrumbModule,
        TableModule,
        ConfirmDialogModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
