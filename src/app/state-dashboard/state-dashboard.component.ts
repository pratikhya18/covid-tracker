import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-state-dashboard',
  templateUrl: './state-dashboard.component.html',
  styleUrls: ['./state-dashboard.component.css']
})
export class StateDashboardComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
     // $(function () { 
    //   $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
    // });  
 
    $(".progress-bar").each(function(){
     
      $('.progress-bar').animate({
        "width": $('.pb').attr("aria-valuenow") + '%', 
    });
  });
  }

}
