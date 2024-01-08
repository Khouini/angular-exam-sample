import { ProductServiceService } from './../../core/services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/entities/product';

@Component({
  selector: 'app-product-details-switcher',
  templateUrl: './product-details-switcher.component.html',
  styleUrls: ['./product-details-switcher.component.css'],
})
export class ProductDetailsSwitcherComponent implements OnInit {
  id: Number;
  product: Product;
  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    public productServiceService: ProductServiceService
  ) {}

  ngOnInit() {
    this.id = Number(this.activated.snapshot.params['id']);
    this.productServiceService.fetchProductById(this.id).subscribe({
      next: (data: any) => {
        this.product = data;
        console.log('data', this.product);
      },
    });
  }
}
