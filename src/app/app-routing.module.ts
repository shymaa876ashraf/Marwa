import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './product-without-discount/product-without-discount.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    
{path:"Home",component:HomeComponent},
{path:"Products",component:ProductComponent,
children:[
  {path:"productwithdiscount",component:ProductWithDiscountComponent},
  {path:"productwithoutdiscount",component:ProductWithoutDiscountComponent}
]
},
{path:"Users",component:UsersComponent},
{path:"Posts",component:PostsComponent},
{​​​​​​​​path:"",redirectTo:"/Home",pathMatch:'full'}​​​​​​​​,
{path:"Register",component:RegisterComponent},
{path:"Login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
