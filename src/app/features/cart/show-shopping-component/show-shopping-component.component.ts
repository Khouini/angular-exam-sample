import { ProductServiceService } from './../../../core/services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-shopping-component',
  templateUrl: './show-shopping-component.component.html',
  styleUrls: ['./show-shopping-component.component.css'],
})
export class ShowShoppingComponentComponent implements OnInit {
  constructor(public productServiceService: ProductServiceService) {}

  ngOnInit() {
    this.productServiceService.getCarts();
  }
}
