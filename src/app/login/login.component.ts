import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllServiceService } from '../../../service/all-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public AllServiceService: AllServiceService) {
    //  this.logInService.getUserLogin().subscribe((data: any) => {
    //   const result = data.find((a:any)=>{
    //   })
      
    //   //alert(data);
    //   //this.logInUser = data;
    // });
  }

  getUser(UserLoginmatch: NgForm)
  {
    // const email = UserLoginmatch.control.value.email
    // console.log(email)
    // const pass = UserLoginmatch.control.value.password
    // console.log(pass)
    // const adress = UserLoginmatch.control.value.adress
    // console.log(adress)
    
    this.AllServiceService.getUserLogin().subscribe((data: any) => {
        const result = data.find((a:any)=>{
          console.log("signup form data"+a.password);
          return a.password === UserLoginmatch.control.value.password && a.email === UserLoginmatch.control.value.email

      })
      
      console.log("result"+result)
      if(result)
      {
                alert("LogIn successfull")
                UserLoginmatch.reset();
      }
      else
      {
        alert("user not found")
      }
  })
}

  ngOnInit(): void {
    
  }

}
