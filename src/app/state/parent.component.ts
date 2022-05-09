import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'service/all-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  StateData:any=[];
  statesArray: any=[];
  selctedstate: any;
  citiesArray: any=[];
  fetchedData: any=[];
  // val2:string="cool";
  // property2:string="";
  constructor( public listApi:AllServiceService) { 
   
  }

  ngOnInit(): void {
  //  this.getStates()
  this.listApi.get_list().subscribe((data: any) => {
    const result = data;
    this.StateData = data;
    for(let i=0;i<data[0].state[0].City.length;i++)
    {
this.fetchedData = ["city_name", data[0].state[0].City[i].city_name,
"population", data[0].state[0].City[i].population,
"active", data[0].state[0].City[i].active,
"confirmed", data[0].state[0].City[i].confirmed,
"deceased",data[0].state[0].City[i].deceased,
"recovered", data[0].state[0].City[i].recovered,
"vaccinated", data[0].state[0].City[i].vaccinated]
this.StateData.push(this.fetchedData);

    }
    
    console.log("ngoninit"+this.StateData);

    // console.log("---------->",JSON.stringify(result))
    // console.log("result is "+ result[0].Country)
    // for(let i=0;i<result.length;i++)
    // {
    //   // console.log("country ---> "+result[i].Country)
    //   for(let j=0;j<result[i].state.length;j++)
    // {
    //   // console.log("state name  is -->"+ result[0].state[j].State_name)
    //   for(let k=0;k<result[i].state[j].City.length;k++)
    //   {
    //     // console.log("cities name name  is -->"+ result[i].state[j].City[k].city_name)
    //    this.StateData = result[i].state[j].City[k].city_name;
    //    console.log(this.StateData)
    //   }
    // }
    // }
    
    
     
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

  getStates()
  {
    
    for(let i=0;i<this.StateData[0].state.length;i++)
     {
      this.statesArray.push ( this.StateData[0].state[i].State_name);
      console.log(this.statesArray);
     }
  }

  getSelectedState(event:any)
  {
   
    for(let i=0;i<this.StateData[0].state.length;i++)
     {
      this.statesArray.push ( this.StateData[0].state[i].State_name);
      // console.log(this.statesArray);
      if(event==this.StateData[0].state[i].State_name)
      {
        for(let j=0;j<this.StateData[0].state[i].City.length;j++)
        {
          this.citiesArray.push(this.StateData[0].state[i].City[j].city_name)
          console.log("------>"+this.citiesArray);
          
        }
        
      }
     }
this.selctedstate=event;
console.log(this.selctedstate);

  }

//   prop(v:any){
//     this.property2=v;
// }

}
