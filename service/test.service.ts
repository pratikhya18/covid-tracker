import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = "app/jsonfile/1089 (1).json"
  num1:number=0
  num2:number=0
 result:number=0
Numb1=(event:any)=>
  {
    console.log(event.target.value)
    this.num1=event.target.value
    //console.log(this.num1)
  }
  Numb2=(event:any)=>
  {
    console.log(event.target.value)
    this.num2=event.target.value
    //console.log(this.num2)
  }
  addRes=()=>
  {
    
     this.result=(this.num1*1)+(this.num2*1)
    console.log(this.result)
    
  }

  constructor(private http:HttpClient) { }

 
getJsonValue()
{
  const jsonValue = new Observable(
    (observer)=>{
      observer.next('hello')
    }
  );
  return jsonValue;
}

get_list()
  {
    return this.http.get(this.url);
  }

}
