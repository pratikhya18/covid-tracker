import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
name:string=""
email: string=""

@Output() greetEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    //this.hello();
  }

  callParentgreet() {
     //console.log("fytuhijknm"+this.name);
     //alert("child")
     this.greetEvent.emit();
    
  }

  onSubmit(userForm: NgForm)
  {
console.log(userForm.value);
console.log(userForm);

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

