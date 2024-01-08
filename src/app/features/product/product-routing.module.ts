import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { ProductDetailsComponent } from 'src/app/components/product-details/product-details.component';
import { ProductDetailsSwitcherComponent } from 'src/app/components/product-details-switcher/product-details-switcher.component';

const routes: Routes = [
  { path: 'add', component: AddProductComponentComponent },
  { path: ':id', component: ProductDetailsSwitcherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
