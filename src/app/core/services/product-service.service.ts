import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  apiUrl = environment.baseUrl + '/products';
  apiUrlCart = environment.baseUrl + '/carts';
  data: Product[] = [];
  cartData: Product[] = [];
  constructor(private _http: HttpClient) {}

  getProducts() {
    this.fetchAllProducts().subscribe({
      next: (data: Product[]) => {
        this.data = data;
        console.log('data', this.data);
      },
    });
  }

  fetchAllProducts() {
    return this._http.get<Product[]>(this.apiUrl);
  }

  addProduct(body: Product) {
    return this._http.post(this.apiUrl, body);
  }

  addToCart(body: Product) {
    return this._http.post(this.apiUrlCart, {
      name: body.name,
      description: body.description,
      price: body.price,
    });
  }

  fetchAllCarts() {
    return this._http.get<Product[]>(this.apiUrlCart);
  }

  getCarts() {
    this.fetchAllCarts().subscribe({
      next: (data: Product[]) => {
        this.cartData = data;
        console.log('cart data', this.cartData);
      },
    });
  }

  fetchProductById(id: Number) {
    return this._http.get<Product[]>(this.apiUrl + '/' + id);
  }
} 
