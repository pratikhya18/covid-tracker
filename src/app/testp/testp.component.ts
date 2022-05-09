import { Component, Input, OnInit } from '@angular/core';
import { TestService } from 'service/test.service';

@Component({
  selector: 'app-testp',
  templateUrl: './testp.component.html',
  styleUrls: ['./testp.component.css']
})
export class TestpComponent implements OnInit {

  result1:number=0;
  constructor(private service:TestService) { }

  ngOnInit(): void {
    this.result1=this.service.result
    this.service.get_list().subscribe((result)=>
    {
      console.log("getlist",result)
    })
  }

  addNumber()
  {
    // const res = new AddserviceService();
    // res.addRes();
    this.service.addRes();
  }

}
