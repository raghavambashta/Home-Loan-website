import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Prop } from 'src/app/model/Prop';
import { PropService } from 'src/app/services/prop.service';

@Component({
  selector: 'app-prop-form',
  templateUrl: './prop-form.component.html',
  styleUrls: ['./prop-form.component.css']
})
export class PropFormComponent implements OnInit {
  prop: Prop = {
    PId:0,
    Name: "",
    Locality: "",
    City:"",
    State:"",
    Pin:0,
    CId: 0
  }
  constructor(private propservice : PropService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  
  propForm =new FormGroup({
    pid: new FormControl("",[Validators.required]),
    name : new FormControl("",[Validators.required]),
    locality: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    pin: new FormControl("", [Validators.required]),
    cid: new FormControl("",[Validators.required]),
  });
  propSubmitted(prop:Prop){

      this.prop=prop;
      console.log(prop);
      this.propservice.registerUser(this.prop).subscribe(
        ()=>{
          alert("Property details submitted")
        
          this.router.navigate(['/bankform'])
        }
      )
    }
    get PId() : FormControl{
      return this.propForm.get("pid") as FormControl
    }
    get Name() : FormControl{
      return this.propForm.get("name") as FormControl
    }
    get Locality() : FormControl{
      return this.propForm.get("locality") as FormControl
    }
    get City() : FormControl{
      return this.propForm.get("city") as FormControl
    }
    get State() : FormControl{
      return this.propForm.get("state") as FormControl
    }
    get Pin() : FormControl{
      return this.propForm.get("pin") as FormControl
    }
    get CId() : FormControl{
      return this.propForm.get("cid") as FormControl
    }
}

