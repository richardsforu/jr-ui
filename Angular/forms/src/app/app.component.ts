import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  products:any

  // steps:
  // 1 - Define FormGroup element name
  productForm: FormGroup;

  // step2: define form builder object
  constructor(private fb:FormBuilder,private http:HttpClient) {}

  // step3: define / add form elements to the formGroup obj
  ngOnInit(){

    this.productForm=this.fb.group(
      {
        id:[''],
        name:[''],
        price:[0.0],
        description:['']
      }
    );

    this.http.get('http://localhost:8080/api/products')
    .subscribe(products =>this.products=products)

  }

  // step 4: submit form function

  handleSubmit(){
   
    console.log('submited');
    //console.log(this.productForm.value);
    //this.products.push(this.productForm.value);

    this.http.post('http://localhost:8080/api/products',this.productForm.value)
    .subscribe(product =>{
      console.log(product);
    })


  }

 
}
