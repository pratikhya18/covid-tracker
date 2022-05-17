import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from '../../../service/all-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  logInUser: any;

  constructor(public AllServiceService: AllServiceService, private router:Router) {
    // this.logInService.getUserLogin().subscribe((data: any) => {
    //   const result = data;
    //   for (let i = 0; i < result.length; i++) {
    //     console.log('data' + result[i].usename);
    //     console.log('data' + result[i].password);
    //   }

    //   //alert(data);
    //   //this.logInUser = data;
    // });
  }

  ngOnInit(): void {}

  LoggedIn(UserLogin: NgForm) {
    //console.log(UserLogin:NgForm);
     console.log('buttonclick' + UserLogin.value.email);
    console.log('buttonclick' + UserLogin.value.password);
    console.log("buttonclick"+ UserLogin.value.firstname)
  }

  // user: user = {
  //   usename: '',
  //   password: '',
  // };

  addUser(UserLogin:any) {
   
    //       console.log(UserLogin.value.email);
    console.log(UserLogin.value.password);
    const formData = {
      email: UserLogin.value.email,
      password: UserLogin.value.password,
      firstname:UserLogin.value.Firstname,
      lastname:UserLogin.value.Lastname,
      age:UserLogin.value.Age,
      country:UserLogin.value.country,
      adress:UserLogin.value.Adress,
      gender:UserLogin.value.exampleRadios

    };
    // this.logInService.postLogInDetails(formData).subscribe((data) => {
    //   console.log('data' + data);
    // });
   this.AllServiceService.postLogInDetails(formData).subscribe((data) => {
    console.log(data);
    this.router.navigateByUrl('/login')
    });
  }
}
// export interface user {
//   usename: '';
//   password: '';
// }

