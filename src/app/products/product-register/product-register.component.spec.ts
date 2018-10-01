import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegisterComponent } from './product-register.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProductFormComponent } from './product-form/product-form.component';
import { MessagesModule } from 'primeng/messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { AppRoutingModule } from '../../app-routing.module';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductTableComponent } from '../product-list/product-table/product-table.component';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BooleanPipe } from '../../shared/pipes/boolean/boolean.pipe';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductRegisterComponent', () => {
  let component: ProductRegisterComponent;
  let fixture: ComponentFixture<ProductRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductRegisterComponent,
        ProductFormComponent,
        ProductListComponent,
        ProductTableComponent,
        BooleanPipe
      ],
      imports: [
        BreadcrumbModule,
        MessagesModule,
        FormsModule,
        ReactiveFormsModule,
        MessageModule,
        CheckboxModule,
        DropdownModule,
        CurrencyMaskModule,
        CalendarModule,
        PanelModule,
        AppRoutingModule,
        TableModule,
        ConfirmDialogModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
