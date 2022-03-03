import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';


isClicked:boolean=false;
  productsList:any;
  @ViewChild(ProductsComponent) products?:ProductsComponent;

  viewItems(){

    this.products?.renderValues();
    this.productsList=this.products?.ProductList;

    if(!this.isClicked)
    this.isClicked=true;
    else
    this.isClicked=false;
  
    
  }
   }