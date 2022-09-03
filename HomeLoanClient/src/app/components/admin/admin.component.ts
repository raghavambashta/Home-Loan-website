import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/Admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  adminForm = new FormGroup({
    username: new FormControl("",[Validators.required]),
    pwd: new FormControl("",[Validators.required])
  });

  adminLogin(){

        alert("Admin succesfully loggedin")
      
        this.router.navigate(['/adminpage'])
      }
      

  get Username() : FormControl{
    return this.adminForm.get("username") as FormControl
  }
  get PWD() : FormControl{
    return this.adminForm.get("pwd") as FormControl
  }
}
