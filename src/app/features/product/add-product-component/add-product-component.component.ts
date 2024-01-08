import { ProductServiceService } from './../../../core/services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/entities/product';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css'],
})
export class AddProductComponentComponent implements OnInit {
  product: Product;
  fbProduct: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ac: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit() {
    this.fbProduct = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', Validators.pattern('^[0-9]+$')],
      description: ['', Validators.minLength(10)],
    });
  }

  printConsole() {
    console.log(this.fbProduct);
  }
  addProduct() {
    console.log('to add:', this.fbProduct.value);
    this.productService.addProduct(this.fbProduct.getRawValue()).subscribe({
      next: () => {
        alert('Produit ajouté');
        this.router.navigate(['/home']);
      },
    });
  }
  get name() {
    return this.fbProduct.controls['name'];
  }

  get price() {
    return this.fbProduct.controls['price'];
  }

  get description() {
    return this.fbProduct.controls['description'];
  }
}
