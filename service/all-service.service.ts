import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  url = environment.baseurl+"/tables/getTable"
  url2 = environment.baseurl+"/login/get_user_login"
url1 = environment.baseurl+"/login/post_user_login"

  constructor(private http:HttpClient) { }
  get_list()
  {
    return this.http.get(this.url);
  }
  getUserLogin()
  {
    return this.http.get(this.url2);
  }
  
  getUserLoginis()
{
  return this.http.get(this.url1);
}
postLogInDetails(data:any)
{
console.log("---->"+JSON.stringify(data));


  return this.http.post(environment.baseurl+"/Users/create",data);


//   const headers = { 'content-type': 'application/json','Access-Control-Allow-Origin': '*'}  
//   const body=JSON.stringify(data);
//   console.log(data);
//   const value= this.http.post(environment.baseurl+"/Users/create",body);
//   // const response = value.subscribe(data => {
//   //   ////console.log(data);
//   //   // return data;
//   // });
//  //console.log(response)
//  return value; 
}
}


// facade