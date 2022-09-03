import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cred } from 'src/app/model/cred';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  repeatPass:string = 'none';
  cred: Cred = {
    Id: 0,
    MobileNum: "",
    Email: "",
    Password: ""
  }
  constructor(private registerservice : RegisterService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  registerForm =new FormGroup({
    Id: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.email, Validators.required]),
    mobile: new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    pwd: new FormControl("", [Validators.required]),
    rpwd: new FormControl(""),
  });

  registerSubmitted(cred:Cred){
    if(this.PWD.value == this.RPWD.value){
      this.repeatPass = 'none';
      this.cred=cred;
      console.log(cred);
      this.registerservice.registerUser(this.cred).subscribe(
        ()=>{
          alert("User Successfully registered. Please remember your User Id. Your User Id and Credential Id is same")
        
          this.router.navigate(['/applicantform'])
        }
      )
    }
    else{
      this.repeatPass='inline'
    }
  }
  
  get Id() : FormControl{
    return this.registerForm.get("Id") as FormControl
  }
  get Email() : FormControl{
    return this.registerForm.get("email") as FormControl
  }
  get Mobile() : FormControl{
    return this.registerForm.get("mobile") as FormControl
  }
  get PWD() : FormControl{
    return this.registerForm.get("pwd") as FormControl
  }
  get RPWD() : FormControl{
    return this.registerForm.get("rpwd") as FormControl
  }
}
