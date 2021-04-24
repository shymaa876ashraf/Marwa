import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../Services/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postList =[];
  constructor(private post:PostServiceService) { }
  errmsg;
  ngOnInit(): void {
    this.post.getAllPosts().subscribe(
      serviceData=>
      {
        this.postList =serviceData;
      },
      serviceError=>
      {
        this.errmsg=serviceError;
      })

  }

}
