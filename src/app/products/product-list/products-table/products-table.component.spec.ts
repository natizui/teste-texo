import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTableComponent } from './products-table.component';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { BooleanPipe } from '../../../shared/pipes/boolean/boolean.pipe';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AppRoutingModule } from '../../../app-routing.module';
import { ProductListComponent } from '../product-list.component';
import { ProductRegisterComponent } from '../../product-register/product-register.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProductFormComponent } from '../../product-register/product-form/product-form.component';
import { MessageModule } from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { APP_BASE_HREF } from '@angular/common';

describe('ProductsTableComponent', () => {
  let component: ProductsTableComponent;
  let fixture: ComponentFixture<ProductsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductsTableComponent,
        BooleanPipe ,
        ProductListComponent,
        ProductsTableComponent,
        ProductRegisterComponent,
        ProductFormComponent
      ],
      imports: [
        MessagesModule,
        TableModule,
        ConfirmDialogModule,
        AppRoutingModule,
        BreadcrumbModule,
        MessageModule,
        FormsModule,
        ReactiveFormsModule,
        CheckboxModule,
        DropdownModule,
        CurrencyMaskModule,
        CalendarModule,
        PanelModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
