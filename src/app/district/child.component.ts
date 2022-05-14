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
  StateData: any = [];
  statesArray: any = [];
  selctedstate: any;
  citiesArray: any = [];
  fetchedData: any = [];
  storeArray: any = [];
  DataArray: any = [];

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
          this.DataArray = result[i].state[j].City[k].city_name;
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
    //  this.getStates()
    this.listApi.get_list().subscribe((data: any) => {
     
      this.DataArray = data;
      console.log(data[0].state[0].City.length);

      for (let i = 0; i < data[0].state[0].City.length; i++) {
        this.fetchedData = {
          city_name: data[0].state[0].City[i].city_name,
          population: data[0].state[0].City[i].population,
          active: data[0].state[0].City[i].active,
          confirmed: data[0].state[0].City[i].confirmed,
          deceased: data[0].state[0].City[i].deceased,
          recovered: data[0].state[0].City[i].recovered,
          vaccinated: data[0].state[0].City[i].vaccinated,
        };
        this.StateData.push(this.fetchedData);
      }
      this.StateData.shift();
    });
  }

  getStates() {
    console.log(this.DataArray[0].state);

    for (let i = 0; i < this.DataArray[0].state.length; i++) {
      this.statesArray.push(this.DataArray[0].state[i].State_name);
      // console.log(this.statesArray);
    }
  }

  getSelectedState(event: any) {
    this.StateData = [];
        this.fetchedData = [];
    for (let i = 0; i < this.DataArray[0].state.length; i++) {
      // this.statesArray.push(this.DataArray[0].state[i].State_name);
      // console.log(this.statesArray);
      if (event == this.DataArray[0].state[i].State_name) {
        console.log("event",event,"dataaraay",this.DataArray[0].state[i].State_name);
        
        
        for (let j = 0; j < this.DataArray[0].state[i].City.length; j++) {
          // this.citiesArray.push(this.DataArray[0].state[i].City[j].city_name);
          // console.log('------>' + this.citiesArray);
          this.fetchedData = {
            city_name: this.DataArray[0].state[i].City[j].city_name,
            population: this.DataArray[0].state[i].City[j].population,
            active: this.DataArray[0].state[i].City[j].active,
            confirmed: this.DataArray[0].state[i].City[j].confirmed,
            deceased: this.DataArray[0].state[i].City[j].deceased,
            recovered: this.DataArray[0].state[i].City[j].recovered,
            vaccinated: this.DataArray[0].state[i].City[j].vaccinated,
          };
          this.StateData.push(this.fetchedData);
        }


      }
      
    }
    console.log(this.StateData);
    this.selctedstate = event;
    // console.log(this.selctedstate);
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


