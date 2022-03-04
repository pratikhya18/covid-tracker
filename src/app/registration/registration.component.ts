import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  logInUser: any;

  constructor(public logInService: LoginService) {
    this.logInService.getUserLogin().subscribe((data: any) => {
      const result = data;
      for (let i = 0; i < result.length; i++) {
        // console.log('data' + result[i].usename);
        // console.log('data' + result[i].password);
      }

      //alert(data);
      //this.logInUser = data;
    });
  }

  ngOnInit(): void {}

  LoggedIn(UserLogin: NgForm) {
    //console.log(UserLogin:NgForm);
    console.log('buttonclick' + UserLogin.value.email);
    console.log('buttonclick' + UserLogin.value.password);
  }

  user: user = {
    usename: '',
    password: '',
  };

  addUser(UserLogin: any) {
    //       console.log(UserLogin.value.email);
    // console.log(UserLogin.value.password);
    const formData = {
      usename: UserLogin.value.email,
      password: UserLogin.value.password,
    };
    // this.logInService.postLogInDetails(formData).subscribe((data) => {
    //   console.log('data' + data);
    // });
   this.logInService.postLogInDetails(formData).subscribe((data) => {
    console.log(data);
    });
  }
}
export interface user {
  usename: '';
  password: '';
}

