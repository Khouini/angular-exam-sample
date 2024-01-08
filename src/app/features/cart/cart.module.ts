import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ShowShoppingComponentComponent } from './show-shopping-component/show-shopping-component.component';


@NgModule({
  declarations: [
    ShowShoppingComponentComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
