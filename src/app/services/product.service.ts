import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

// configure base url
const userRoute = '/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.apiBaseUrl + userRoute;
  constructor(private http: HttpClient) {}

  //http://localhost:8080/product/
  getAll(): Observable<Product[]> {
    let requestUrl = this.url + '/';
    return this.http.get<Product[]>(requestUrl);
  }

  // http://localhost:8080/product/{id}
  getById(id: number): Observable<Product[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.get<Product[]>(requestUrl);
  }

  // http://localhost:8080/product
  createProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.url, product);
  }

  deleteById(id: number): Observable<Product[]> {
    let requestUrl = this.url + '/' + id;
    return this.http.delete<Product[]>(requestUrl);
  }
}
