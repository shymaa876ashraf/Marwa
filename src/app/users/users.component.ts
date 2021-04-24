import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList =[];
  constructor(private users:UserServiceService) { }

  ngOnInit(): void {
    this.users.getAllUser().subscribe(data=>
      {
        this.userList =data;
      })
  }

}
