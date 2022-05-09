import { Component, OnInit, Output,EventEmitter, ViewChild,Input } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { AllServiceService } from 'service/all-service.service';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  dataArray: any=[];

  constructor( public listApi:AllServiceService) { 
    this.listApi.get_list().subscribe((data: any) => {
      const result = data;
      // console.log("---------->",JSON.stringify(result))
      // console.log("result is "+ result[0].Country)
      for(let i=0;i<result.length;i++)
      {
        // console.log("country ---> "+result[i].Country)
        for(let j=0;j<result[i].state.length;j++)
      {
        // console.log("state name  is -->"+ result[0].state[j].State_name)
        for(let k=0;k<result[i].state[j].City.length;k++)
        {
          console.log("cities name name  is -->"+ result[i].state[j].City[k].city_name)
          this.dataArray = result[i].state[j].City[k].city_name;
        }
      }
      }
      
      
       
      // this.dataArray= result[0].odisha;
      // if(result && result.length)
      // { 
      //   for(var i=0;i<result.length;i++)
      //   {
      //     for(var keys in result[i].Andhra_Pradesh)
      //     {
      //       console.log("population",result[i].Odisha[keys].population)
      //     }

      //   }
      // }
    });
  }

  ngOnInit(): void {
    
  }



  

  
  // user_instance_of_user_class: User = {
  //   pass:"",
  //   email:"hygyg"
  // };
  

}
// export interface User {
//   pass:""
//   email:"hygyg"
// }


