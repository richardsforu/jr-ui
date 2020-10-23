import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products:any
  constructor(private ps:ProductService) { }

  renderProducts(){
    this.ps.findAll().subscribe(productsResult => this.products = productsResult)
  }

  ngOnInit(): void {
  
    this.renderProducts();
  }

}
