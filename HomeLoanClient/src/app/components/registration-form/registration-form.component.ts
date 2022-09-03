import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/model/Applicant';
import { ApplicantService } from 'src/app/services/applicant.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  applicant: Applicant = {
    UId: 0,
    FirstName: "",
    MiddleName:"",
    LastName: "",
    Dob: new Date(),
    Gender: "",
    Nationality: "India",
    AadharNum: "",
    PanNum: "",
    CId: 0
  }
  constructor(private applicantservice : ApplicantService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  applicantForm =new FormGroup({
    uid: new FormControl("",[Validators.required]),
    fname : new FormControl("",[Validators.required]),
    mname: new FormControl("", [Validators.required]),
    lname: new FormControl("", [Validators.required]),
    dob: new FormControl("", [Validators.required]),
    gender: new FormControl("",[Validators.required]),
    nationality : new FormControl("",[Validators.required]),
    aadhar: new FormControl("1234", [Validators.required]),
    pan: new FormControl("", [Validators.required]),
    cid: new FormControl("", [Validators.required]),
  });
  applicantSubmitted(applicant:Applicant){

      this.applicant=applicant;
      console.log(applicant);
      this.applicantservice.registerUser(this.applicant).subscribe(
        ()=>{
         // alert("User Successfully registered")
        
          this.router.navigate(['/empform'])
        }
      )
    }
    get UId() : FormControl{
      return this.applicantForm.get("uid") as FormControl
    }
    get Fname() : FormControl{
      return this.applicantForm.get("fname") as FormControl
    }
    get Lname() : FormControl{
      return this.applicantForm.get("lname") as FormControl
    }
    get Dob() : FormControl{
      return this.applicantForm.get("dob") as FormControl
    }
    get Gender() : FormControl{
      return this.applicantForm.get("gender") as FormControl
    }
    get Nationality() : FormControl{
      return this.applicantForm.get("nationality") as FormControl
    }
    get Aadhar() : FormControl{
      return this.applicantForm.get("aadhar") as FormControl
    }
    get Pan() : FormControl{
      return this.applicantForm.get("pan") as FormControl
    }
    get CId() : FormControl{
      return this.applicantForm.get("cid") as FormControl
    }
}
