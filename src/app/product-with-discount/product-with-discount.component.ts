import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../SharedClasses/Enum';
import { IProduct } from '../SharedClasses/IProduct';

@Component({
  selector: 'app-product-with-discount',
  templateUrl: './product-with-discount.component.html',
  styleUrls: ['./product-with-discount.component.scss']
})
export class ProductWithDiscountComponent implements OnInit {

  ProductList: IProduct[] = [];
  Discount:DiscountOffers;

  constructor() {
    this.Discount = DiscountOffers.Discount1;
    this.ProductList = [
      {​​​​​​​​ID:1,Qunatity:4, Price:100,img:"../../assets/img/product.jpg"}​​​​​​​​,
      {​​​​​​​​ID:2,Qunatity:6, Price:200,img:"../../assets/img/men1.jpg"}​​​​​​​​,
      {​​​​​​​​ID:3,Qunatity:9, Price:300,img:"../../assets/img/baby1.jpg"}​​​​​​​​,
     ];
   }
  ngOnInit(): void {
  }
}
