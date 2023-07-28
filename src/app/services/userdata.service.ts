import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

interface dataTypeOfUser{
  name:string,
  age: number,
  email: any
}

@Injectable({
  providedIn: 'root'
})


export class UserdataService {

  constructor(private http:HttpClient) { }
  url="https://dummyjson.com/users";
  usersDataByApi(){
    return this.http.get(this.url)
  }
  users(){
    return [
      {name:'Dev',age:21,email:'dev@gmail.com'},
      {name:'jay',age:21,email:'jay@gmail.com'},
      {name:'Bhavik',age:22,email:'bhavik@gmail.com'}
    ]
  }
  ownUrl = "http://localhost:3000/users";
  usersDataByOwnApi(){
    return this.http.get(this.ownUrl)
  }
  saveUsers(data:any){
    return this.http.post(this.ownUrl,data);
  }
}
