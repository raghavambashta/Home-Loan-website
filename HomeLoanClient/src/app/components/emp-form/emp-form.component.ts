import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emp } from 'src/app/model/Emp';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  emp: Emp = {
    EId: 0,
    EmpType: "",
    OrgType:"",
    EmpName: "",
    Income: 0,
    CId: 0
  }
  constructor(private empservice : EmpService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  empForm =new FormGroup({
    eid: new FormControl("",[Validators.required]),
    emptype : new FormControl("",[Validators.required]),
    orgtype: new FormControl("", [Validators.required]),
    empname: new FormControl("", [Validators.required]),
    income: new FormControl("", [Validators.required]),
    cid: new FormControl("",[Validators.required]),
  });
  empSubmitted(emp:Emp){

      this.emp=emp;
      console.log(emp);
      this.empservice.registerUser(this.emp).subscribe(
        ()=>{
          //alert("Employement details submitted")
        
          this.router.navigate(['/propform'])
        }
      )
    }
    get EId() : FormControl{
      return this.empForm.get("eid") as FormControl
    }
    get Emptype() : FormControl{
      return this.empForm.get("emptype") as FormControl
    }
    get Orgtype() : FormControl{
      return this.empForm.get("orgtype") as FormControl
    }
    get Empname() : FormControl{
      return this.empForm.get("empname") as FormControl
    }
    get Income() : FormControl{
      return this.empForm.get("income") as FormControl
    }
    get CId() : FormControl{
      return this.empForm.get("cid") as FormControl
    }
}
