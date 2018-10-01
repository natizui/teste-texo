import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProductTableComponent } from './product-table/product-table.component';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BooleanPipe } from '../../shared/pipes/boolean/boolean.pipe';
import { AppRoutingModule } from '../../app-routing.module';
import { ProductRegisterComponent } from '../product-register/product-register.component';
import { ProductFormComponent } from '../product-register/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskDirective, CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { APP_BASE_HREF } from '@angular/common';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductListComponent,
        ProductTableComponent ,
        BooleanPipe,
        ProductRegisterComponent,
        ProductFormComponent
      ],
      imports: [
        BreadcrumbModule,
        MessagesModule,
        TableModule,
        ConfirmDialogModule,
        ConfirmDialogModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MessageModule,
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
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
