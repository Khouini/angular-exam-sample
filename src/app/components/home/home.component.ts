import { Product } from 'src/app/core/entities/product';
import { ProductServiceService } from './../../core/services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedProduct: Product;
  constructor(
    public productServiceService: ProductServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.productServiceService.getProducts();
  }

  compare(product1: Product, product2: Product): Boolean {
    if (
      product1.description === product2.description &&
      product1.name === product2.name &&
      product1.price === product2.price
    ) {
      return true;
    }
    return false;
  }
  buy(product: Product) {
    this.productServiceService.fetchAllCarts().subscribe({
      next: (data) => {
        const test: Boolean = data.every((pro) => !this.compare(product, pro));
        if (test) {
          this.productServiceService.addToCart(product).subscribe({
            next: () => {
              alert('produit ajouté a la carte');
            },
          });
        } else {
          alert('produti alreadt exists');
        }
      },
    });
  }
  details(product: Product) {
    this.router.navigate([`product/${product.id}`]);
  }

  display(product: Product) {
    this.selectedProduct = product;
  }
}
