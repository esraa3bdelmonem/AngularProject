import { Injectable } from '@angular/core';
//import { DiscountOffers } from '../Shared Classes and types/Enums';
//import { IProduct }  from '../Shared Classes and types/Interfaces';
//import {ICategory } from '../Shared Classes and types/Interfaces';
import {DiscountOffers}from '../Shared Classes and types/Enums';
import {IProduct} from '../Shared Classes and types/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

ProductList:Array<IProduct>=[
  {
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
  ];


GetAllProducts()
{
return this.ProductList
}

ProductListID!:any;

GetProductById(ID:any) {

if(typeof ID  != 'number')
{
  return null;
}
else{
  this.ProductList.filter((p)=>{
    if(p.ID===ID){
     this.ProductListID=p;
    }
    
  });
  return this.ProductListID;


}
}}
