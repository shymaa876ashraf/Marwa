import { Component, OnInit } from '@angular/core';
import { Users } from '../Classes/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }
    

  userModel=new Users('','','','');
  
  ngOnInit(): void {
  }
  onSubmit(data: any)
  {
    console.log(data)
    console.log(this.userModel);
  }
}
