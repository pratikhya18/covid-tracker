import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-district-dashboard',
  templateUrl: './district-dashboard.component.html',
  styleUrls: ['./district-dashboard.component.css']
})
export class DistrictDashboardComponent implements OnInit {
  
  myChart:Chart | undefined;
  constructor() { }

  ngOnInit() {

    {

      this. myChart =  new Chart('canvas', {
        type: "horizontalBar",
        data: {
          datasets: [{
            data: [20,30,40,50,60,70,80,90,30,40,80,20],
            backgroundColor:'rgb(23,44,60)',
            label: 'Week1', stack: ''
          },
           {
            data: [10,20,50,60,20,30,40,50,40,30,40,34],
            backgroundColor: '#0175CA',
            label: 'Week2', stack: ''
          },
          {
            data: [10,20,50,60,20,30,40,50,40,30,40,43],
            backgroundColor: '#6C757D',
            label: 'Week3', stack: ''
          },
          {
            data: [10,20,50,60,20,30,40,50,40,30,40,43],
            backgroundColor:'#6C757D',
            label: 'Week4', stack: '' 
          }
        ],
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","jul","Aug","Sep","Oct","Nov","Dec"],
        },
        
      });
    }


    {

      this. myChart =  new Chart('canvas3', {
        type: "pie",
        data: {
          labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
          datasets: [{
            label: 'My Dataset',
            backgroundColor: "rgb(23,44,60)",
            borderColor: "#ffff",
            fill: true,
            data: [10, 12, 16, 25, 11, 7, 9]
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

      this. myChart =  new Chart('canvas4', {
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

    this. myChart =  new Chart('canvas2', {
      type: "line",
      data: {
        datasets: [{
          data: [20, 12, 30, 40, 20,40,43,37,50,80,30],
          label: "Client Activity (Left Y-axis)",
          backgroundColor: 'rgb(23,44,60)' ,
          // This binds the dataset to the left y axis
          yAxisID: "left-y-axis",
        }, {
          data: [30, 18, 20, 75, 65,56,45,74,24,23,65, 30],
          // borderWidth: [12, 12],
          label: "Non-Client Activity Hours (Right Y-axies)",
          backgroundColor: '#6C757D',
          // This binds the dataset to the right y axis
          yAxisID: "right-y-axis",
        },
      ],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","jul","Aug","Sep","Oct","Nov","Dec"],
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
