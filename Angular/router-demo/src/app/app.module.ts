import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {Routes,RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './product.service';
import { FindProductComponent } from './find-product/find-product.component';
import { AppleComponent } from './apple/apple.component';
import { ProductComponent } from './product/product.component';

const menus:Routes=[
  {path:'', component:DashboardComponent},
  {path:'find',component:FindProductComponent},
  {path:'form',component:ProductFormComponent},
  {path:'list',component:ListProductsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListProductsComponent,
    ProductFormComponent,
    FindProductComponent,
    AppleComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(menus)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
