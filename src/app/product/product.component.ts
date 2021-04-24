import { Component, OnInit } from '@angular/core';
import {IProduct} from '../SharedClasses/IProduct';
import {ICategory} from '../SharedClasses/ICategory';
import {DiscountOffers} from '../SharedClasses/Enum';
import { ProductServiceService } from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
let Discount:DiscountOffers;
let StoreName:string;
let StoreLogo:string;
let ProductList :IProduct[];
let CategoryList:ICategory[];
let ClientName:string;
let IsPurshased:Boolean;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Discount=DiscountOffers.Discount1;
  IDiscount = true;
  StoreName='Store';
  StoreLogo='^_^';
  ProductList:IProduct[];
  CategoryList=['Women','Men','Kids'​​​​​​​​];
  ClientName="";
  public show:boolean = true;
  public hide:boolean = false;
  public IsPurshased:any ='Show';
  constructor(private router:Router,private activeroute:ActivatedRoute,private ProductService:ProductServiceService) { }
  ngOnInit(): void {
    this.ProductList = this.ProductService.GetAllProducts();
  } 
  BuyProduct(){
    this.show = !this.show;
    this.hide = !this.hide;
    if(this.show)  
      this.IsPurshased = "Hide";
    else
      this.IsPurshased = "Show";
  }
  targetProductId:number;
  targetProduct :IProduct;
  IsShownProduct =false;
  showallproduct =false;
  renderValues()
  {​​​​​
    this.showallproduct =true;
    this.ProductList=this.ProductService.GetAllProducts();
  }​​​​​
  renderValueById(id:number){​​​​​
     this.IsShownProduct =true;
     this.targetProduct =this.ProductService.GetProductById(id);
  }​​​​​ 
  discount()
  { 
    this.router.navigate(['productwithdiscount'],{relativeTo:this.activeroute})
  }
  withoutdiscount()
  {
    this.router.navigate(['productwithoutdiscount'],{relativeTo:this.activeroute})
  }
} 

