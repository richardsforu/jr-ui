import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl="http://localhost:8080/api"
  products:any;
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.baseUrl+'/products')
  }

  saveProduct(product){
    return this.http.post(this.baseUrl+'/products',product);
  }

  updateProduct(product){
    this.http.put(this.baseUrl+'/products',product);
  }
  
  findById(id){
    return this.http.get(this.baseUrl+`/products/${id}`)
  }

  deleteProduct(id){
    this.http.delete(this.baseUrl+`/products/${id}`)
  }

  //ng g c apple -it -is 

}
