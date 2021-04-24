import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../SharedClasses/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  _url="/assets/data/users.json";
  constructor(private _http:HttpClient) { }

  getAllUser()
  {
    return this._http.get<IUser[]>(this._url);
  }
}
