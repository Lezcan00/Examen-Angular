import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as productsData from '../assets/products.json'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = (productsData as any).default; 

  getProducts(): Observable<any[]> {
    return of(this.products); 
  }
}

