import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  items: MenuItem[];
  hidden: boolean;
  innerWidth: number;
  resizeTimeout: any;
  
  
  ngOnInit() {
    this.items = [
        {label: 'Produtos', routerLink: ['/produtos']},
        {label: 'Cadastro', routerLink: ['/produtos/cadastro']},
    ];
  }

  menuToggle() {
    this.hidden = !this.hidden;
  }

}
