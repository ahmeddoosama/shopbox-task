import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuGroupRoutingModule } from './menu-group-routing.module';
import { MenuGroupComponent } from './menu-group.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuItemComponent } from './components/menu-item/menu-item.component';


@NgModule({
  declarations: [
    MenuGroupComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MenuGroupRoutingModule,
    SharedModule
  ]
})
export class MenuGroupModule { }
