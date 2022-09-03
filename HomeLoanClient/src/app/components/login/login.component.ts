import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/Login';
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login = {
    Id: 0,
    Password: ""
  }

  constructor(private loginservice:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    id: new FormControl("",[Validators.required]),
    pwd: new FormControl("",[Validators.required])
  });


  loginSubmitted(login:Login){
    this.login=login
    this.loginservice.verifyUser(this.login).subscribe(
      (data:any)=>{
        console.log("data")
        console.log(data)
        User.cid = login.Id
        console.log(User.cid)
        if(data){
          alert("Login Successful!")
          this.router.navigate(['/userpage'])
          //this.router.navigate(['/registrationform'])
        }
        else{
          alert("Incorrect Id or Password!")
        }
      }
    )
  }

  get Id() : FormControl{
    return this.loginForm.get("id") as FormControl
  }
  get PWD() : FormControl{
    return this.loginForm.get("pwd") as FormControl
  }
}
