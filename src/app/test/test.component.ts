import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  number1:number=0
  number2:number=0
results:number=0
  NumbOne=(event:any)=>
  {
    // const valu1 = new AddserviceService();
    // valu1.Numb1(e);
    this.service.Numb1(event)
  }
  NumbTwo=(event:any)=>
  {
    // const valu2 = new AddserviceService();
    // valu2.Numb2(event);
    this.service.Numb2(event)
  }


  addNum()
  {
    // const res = new AddserviceService();
    // res.addRes();
    this.service.addRes();
    
  }


  constructor(private service:TestService,private router: Router) { }

  ngOnInit(): void {
    this.number1=this.service.num1
    this.number2=this.service.num2
  this.results =this.service.result
  }

  }

 
 


