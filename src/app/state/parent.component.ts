import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'service/all-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  StateData: any = [];
  statesArray: any = [];
  selctedstate: any;
  citiesArray: any = [];
  fetchedData: any = [];
  storeArray: any = [];
  DataArray: any = [];
  // val2:string="cool";
  // property2:string="";
  constructor(public listApi: AllServiceService) {}

  ngOnInit(): void {
    //  this.getStates()
    this.listApi.get_list().subscribe((data: any) => {
      const result = data;
      this.DataArray = data;
      console.log(data[0].state[0].City.length);

      for (let i = 0; i < data[0].state.length; i++) {
        this.fetchedData = {
          city_name: data[0].state[i].State_name,
          population: data[0].state[i].population,
          active: data[0].state[i].active,
          confirmed: data[0].state[i].confirmed,
          deceased: data[0].state[i].deceased,
          recovered: data[0].state[i].recovered,
          vaccinated: data[0].state[i].vaccinated,
        };
        this.StateData.push(this.fetchedData);
      }
      this.StateData.shift();
    });
  }

  // getStates() {
  //   console.log(this.DataArray[0].state);

  //   for (let i = 0; i < this.DataArray[0].state.length; i++) {
  //     this.statesArray.push(this.DataArray[0].state[i].State_name);
  //     // console.log(this.statesArray);
  //   }
  // }

  // getSelectedState(event: any) {
  //   this.StateData = [];
  //       this.fetchedData = [];
  //   for (let i = 0; i < this.DataArray[0].state.length; i++) {
  //     // this.statesArray.push(this.DataArray[0].state[i].State_name);
  //     // console.log(this.statesArray);
  //     if (event == this.DataArray[0].state[i].State_name) {
  //       console.log("event",event,"dataaraay",this.DataArray[0].state[i].State_name);
        
        
  //       for (let j = 0; j < this.DataArray[0].state[i].City.length; j++) {
  //         // this.citiesArray.push(this.DataArray[0].state[i].City[j].city_name);
  //         // console.log('------>' + this.citiesArray);
  //         this.fetchedData = {
  //           city_name: this.DataArray[0].state[i].City[j].city_name,
  //           population: this.DataArray[0].state[i].City[j].population,
  //           active: this.DataArray[0].state[i].City[j].active,
  //           confirmed: this.DataArray[0].state[i].City[j].confirmed,
  //           deceased: this.DataArray[0].state[i].City[j].deceased,
  //           recovered: this.DataArray[0].state[i].City[j].recovered,
  //           vaccinated: this.DataArray[0].state[i].City[j].vaccinated,
  //         };
  //         this.StateData.push(this.fetchedData);
  //       }


  //     }
      
  //   }
  //   console.log(this.StateData);
  //   this.selctedstate = event;
  //   // console.log(this.selctedstate);
  // }

  //   prop(v:any){
  //     this.property2=v;
  // }
}
