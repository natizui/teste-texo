import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductRegisterComponent } from './products/product-register/product-register.component';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProductsTableComponent } from './products/product-list/products-table/products-table.component';
import { ProductFormComponent } from './products/product-register/product-form/product-form.component';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BooleanPipe } from './shared/pipes/boolean/boolean.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        ProductListComponent,
        ProductRegisterComponent,
        ProductsTableComponent,
        ProductFormComponent,
        BooleanPipe
      ],
      imports: [
        AppRoutingModule,
        MenuModule,
        BreadcrumbModule,
        MessagesModule,
        TableModule,
        ConfirmDialogModule,
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'teste-texo'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('teste-texo');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to teste-texo!');
  // }));
});
