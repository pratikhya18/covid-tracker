import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LoggedIn(data:any)
  {
console.log(data);
  }

  user: user = {
      "email":"user123@gmail.com",
      "password":""
    };

}
export  interface user
{
  "email":'user123@gmail.com',
  "password":""
}

