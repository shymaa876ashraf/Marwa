import { Injectable } from '@angular/core';
import { IProduct } from '../SharedClasses/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  GetAllProducts(){
    return this.products;   
  }
  products:IProduct[];

  constructor() {
    this.products=[{​​​​​​​​ID:1,Qunatity:10,Price:100,img:"../../assets/img/product.jpg"}​​​​​​​​,
    {​​​​​​​​ID:2,Qunatity:30,Price:333,img:"../../assets/img/men1.jpg"},
    {​​​​​​​​ID:3,Qunatity:20,Price:90,img:"../../assets/img/baby1.jpg"}];
  }
  GetProductById(id:number)
  {
    
    for(var p of this.products)
    {
      if(p.ID==id)
      {
        console.log(p);
        return p;
      }
    }
    return null;
  }
  
}
