import { Component, OnInit } from '@angular/core';
import {ICategory } from '../Shared Classes and types/Interfaces';
import {DiscountOffers}from '../Shared Classes and types/Enums';
import {IProduct} from '../Shared Classes and types/Interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

//Discount:DiscountOffers="No Discount";
Discount = DiscountOffers['DIS10%'];

StoreName:string="";
 StoreLogo:string="";
 ProductList=new Array <IProduct>();
 CategoryList=new Array <ICategory>();
 ClientName:string="";
 IsPurshased:boolean=true;

  constructor() { 
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


  ngOnInit(): void {
  }

}

