import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardGroubComponent } from './components/card-groub/card-groub.component';
import { SallableMenuComponent } from './components/sallable-menu/sallable-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerComponent } from './components/customer/customer.component';
import { FavMenuComponent } from './components/fav-menu/fav-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    CardGroubComponent,
    SallableMenuComponent,
    CustomerComponent,
    FavMenuComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatDialogModule
  ]
})
export class HomeModule { }
