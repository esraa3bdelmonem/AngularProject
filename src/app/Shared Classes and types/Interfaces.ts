import { DiscountOffers } from '../Shared Classes and types/Enums';
export interface IProduct
{
    ID:number;
    Name:string;
    Quantity:number;
    Price:number;
    Img:string;
    
}

export interface ICategory
{
    ID:number;
    Name:string;
}
export interface IPost{
    id:number;
    title:string;
    body:string
}
export interface Iuser{
    name:string;
    username:string;
    email:string
}