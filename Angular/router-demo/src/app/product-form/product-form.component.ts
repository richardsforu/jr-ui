import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  products:any

  // steps:
  // 1 - Define FormGroup element name
  productForm: FormGroup;

  // step2: define form builder object
  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router) {}

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

   

  }

  // step 4: submit form function

  handleSubmit(){
    console.log('submited');
    this.ps.saveProduct(this.productForm.value)
    .subscribe(product =>{
      console.log(product);
      
    })
    this.router.navigate(['list']);
  }


}
