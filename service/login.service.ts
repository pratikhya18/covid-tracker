import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

url ="http://localhost:3000/login/get_user_login"

  constructor( private http:HttpClient) { }

  getUserLogin()
{
  return this.http.get(this.url);
}


  postLogInDetails(data:any)
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(data)
    const value= this.http.post('http://localhost:3000/login/post_user_login',body,{'headers':headers});
    const response = value.subscribe(data => {
      //console.log(data);
      // return data;
    });
   //console.log(response)
   return value; 
  }


}
