import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  //Get Post
  getData()
  {
    let url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }

  //Users
  getUsers()
  {
    let req = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(req);
  }
}
