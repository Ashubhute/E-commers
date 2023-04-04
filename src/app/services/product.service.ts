import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'src/datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  AddProduct(data:product){
return this.http.post(`http://localhost:3000/products`,data)
  }
}
