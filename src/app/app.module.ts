import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './product-without-discount/product-without-discount.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    ProductWithDiscountComponent,
    ProductWithoutDiscountComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
