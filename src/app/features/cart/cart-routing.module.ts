import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowShoppingComponentComponent } from './show-shopping-component/show-shopping-component.component';

const routes: Routes = [
  { path: '', component: ShowShoppingComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
