import { Component, OnInit } from '@angular/core';
import {ICategory } from '../Shared Classes and types/Interfaces';
import {DiscountOffers}from '../Shared Classes and types/Enums';
import {IProduct} from '../Shared Classes and types/Interfaces';
import { ProductServiceService } from '../Services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

//Discount:DiscountOffers="No Discount";
Discount = DiscountOffers['No Discount'];

StoreName:string="";
 StoreLogo:string="";
 ProductList=new Array <IProduct>();
 CategoryList=new Array <ICategory>();
 ClientName:string="";
 IsPurshased:boolean=true;
  productService: any;

  constructor(private router:Router) { 
    
    this.Discount= DiscountOffers["No Discount"],
    this.StoreName='OcazStore',
    this.StoreLogo="../../../../logo.jpg",
    this.ProductList=[{
      ID:1,
      Name:"slipper",
      Quantity:1,
      Price:150,
      Img:"../../../../sliper7.jpg"

    },
    {
      ID:2,
      Name:"bag",
      Quantity:2,
      Price:150,
      Img:"../../../../bag2.jpg"

    },
    {
      ID:3,
      Name:"dress",
      Quantity:3,
      Price:300,
      Img:"../../../../dress3.jpg"

    },
    {
      ID:4,
      Name:"jacket",
      Quantity:4,
      Price:450,
      Img:"../../../../javket4.jpg"

    },
    {
      ID:5,
      Name:"scarf4",
      Quantity:5,
      Price:150,
      Img:"../../../../sliper7.jpg"

    },
  ]

  }

 
  no=DiscountOffers['No Discount'];

  isPurchasedChange()
  {
      if(this.IsPurshased==false){
        this.IsPurshased=true;
      }
  }
 


productList:any;  
   ProductID:any;  
  ngOnInit(): void {
    this.productList=this.productService.GetAllProducts();
    this.ProductID=this.productService.GetProductById(2);

  }
  

  renderValues(){
    return this.productList=this.productService.GetAllProducts();
  }
  navigate() {
    this.router.navigate(["/product"]);
  }
  navigate2() {
    this.router.navigate(["/product"]);
  }}

function renderValues() {
  throw new Error('Function not implemented.');
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

