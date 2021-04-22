import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ProductComponent) pr :ProductComponent;
  title = 'firstprojects';
  ShowAll(){
    this.pr.renderValues();
  }
  showProduct(id:number)
  {
    this.pr.renderValueById(id);
  }
}
