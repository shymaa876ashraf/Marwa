import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../SharedClasses/IPost';
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  _url="/assets/data/Posts.json";
  constructor(private _http:HttpClient)  { }
  getAllPosts(): Observable<IPost[]>
  {
    return this._http.get<IPost[]>(this._url).pipe(
      catchError(
        (err)=>{
          return throwError(err.message || "server Issue Please Conatct Site admin");
        }
      )
    )
  }


}