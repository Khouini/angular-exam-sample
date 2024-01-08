import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddProductComponentComponent } from './features/product/add-product-component/add-product-component.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDetailsSwitcherComponent } from './components/product-details-switcher/product-details-switcher.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent, ProductDetailsComponent, ProductDetailsSwitcherComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
