import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { of } from 'rxjs';
import { AllServiceService } from '../../../service/all-service.service';
import { MonthsModel } from './Models/ClassModal.model';
// import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-district-dashboard',
  templateUrl: './district-dashboard.component.html',
  styleUrls: ['./district-dashboard.component.css']
})
export class DistrictDashboardComponent implements OnInit {

  myChart: Chart | undefined;
  dataArray: any = [];
  stateArray: any = [];
  stateArrayone: any = [];
  stateArraymonths: any = [];
  stateArraymonthsstore: any = [];
  monthapi: MonthsModel[] = []
  result: any
  monthsData: any = [];

  private NewDetails = (source: any): MonthsModel => {
    this.sourceData = source 
    this.result = new MonthsModel();
    console.log('source'+this.sourceData);
    Object.keys(source).map((key) => {
      
      
      if (source[key].January === 'January') {
        this.result.Apis['January'] = source[key];
      } else {
        this.result.Apis[key] = source[key];
      }
    });
    return this.result;
  };
  years: any = [];
  twenty: any=[];
  sourceData: any=[];


  constructor(public allservice: AllServiceService) { }

  ngOnInit() {
    this.allservice.getGraph().subscribe((data: any) => {
      const result = data;
      this.dataArray = result;
      for (let i = 0; i < this.dataArray[0].Root[0].Countries.length; i++) 
      {
        for(let continets=0;continets<this.dataArray[0].Root[0].Countries[i].continents.length;continets++){
        let continetsdata = ['Asia','Africa','North America','South America','Antarctica','Europe','Australia']
        if (this.dataArray[0].Root[0].Countries[i].continents == continetsdata[continets]) 
        {
          for (let j = 0; j < this.dataArray[0].Root[0].Countries[i].coviddata.Years.length; j++) {
            this.years = this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].year;
            // console.log(this.years);
          
              if (this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].year == '2020')
               {
                for (let mon = 0; mon < this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months.length; mon++) {
                  //console.log(this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months[mon]);
                  // //Countries[0].coviddata.Years[0].months
                  this.twenty.push(this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months[mon])
                 
                }
              }
              // if (this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].year == '2021') {
              //   for (let mon = 0; mon < this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months.length; mon++) {
              //     console.log(this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months[mon]);
              //     // let monthsmodel: MonthsModel = this.NewDetails(this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months[mon]);
              //     // //Countries[0].coviddata.Years[0].months
              //     console.log('2021'+this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months[mon]);
                  
                  
              //   }
              // }
              // if (this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].year == '2022') {
              //   for (let mon = 0; mon < this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months.length; mon++) {
              //     console.log(this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months[mon]);
              //     // let monthsmodel: MonthsModel = this.NewDetails(this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months[mon]);
              //     // //Countries[0].coviddata.Years[0].months
              //     console.log('2022'+this.dataArray[0].Root[0].Countries[i].coviddata.Years[j].months[mon]);
                  
              //   }
              // }
           
          }
        }
      }
      }
      console.log('2020'+JSON.stringify(this.twenty)); 
      let monthsmodel: MonthsModel = this.NewDetails(JSON.stringify(this.twenty));
      console.log(monthsmodel);
      
    });

    {

      this.myChart = new Chart('canvas', {
        type: "pie",
        data: {
          labels: ['A', 'B', 'C', 'D', 'E', 'F',],
          datasets: [{
            label: 'My Dataset',
            backgroundColor: ['#1E3F66', '#2E5984', '#528AAE', '#73A5C6', "#91BAD6", '#BCD2E8'],
            borderColor: "#ffff",
            fill: true,
            data: [10, 12, 16, 25, 11, 7]
          }]
        },
        options: {
          responsive: true,

          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }

      });
    }


    {

      this.myChart = new Chart('canvas3', {
        type: "horizontalBar",
        data: {
          labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
          datasets: [{
            label: 'My Dataset',
            backgroundColor: "rgb(23,44,60)",
            borderColor: "#ffff",
            fill: true,
            data: this.monthsData
          }]
        },
        options: {
          responsive: true,

          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }

      });
    }


    {

      this.myChart = new Chart('canvas4', {
        type: "bar",
        data: {
          labels: ['', '', '', '', '', ''],
          datasets: [{

            backgroundColor: "#ffff",
            borderColor: "rgb(255, 99, 132)",
            fill: true,
            data: [10, 12, 16, 25, 11, 7]
          }]
        },
        options: {
          responsive: true,

          scales: {

          }
        }

      });
    }

    {

      this.myChart = new Chart('canvas5', {
        type: "bar",
        data: {
          labels: ['23', '52', '34', '13', '23', '21'],
          datasets: [{

            backgroundColor: "#73A5C6",
            borderColor: "rgb(255, 99, 132)",
            fill: true,
            data: [10, 12, 16, 25, 11, 7]
          }]
        },
        options: {
          responsive: true,

          scales: {

          }
        }

      });
    }

    this.myChart = new Chart('canvas2', {
      type: "line",
      data: {
        datasets: [{
          data: [20, 12, 30, 40, 20, 40, 43, 37, 50, 80, 30],
          label: "Client Activity (Left Y-axis)",
          backgroundColor: 'rgb(23,44,60)',
          // This binds the dataset to the left y axis
          yAxisID: "left-y-axis",
        }, {
          data: [30, 18, 20, 75, 65, 56, 45, 74, 24, 23, 65, 30],
          // borderWidth: [12, 12],
          label: "Non-Client Activity Hours (Right Y-axies)",
          backgroundColor: '#73A5C6',
          // This binds the dataset to the right y axis
          yAxisID: "right-y-axis",
        },
        ],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      },
      options: {
        scales: {
          yAxes: [{
            id: "left-y-axis",
            type: "linear",
            position: "left",
          }, {
            id: "right-y-axis",
            type: "linear",
            position: "right",
          }],
        },
      },
    });
  }

}
