import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doc } from 'src/app/model/Doc';
import { DockService } from 'src/app/services/doc.service';

@Component({
  selector: 'app-doc-form',
  templateUrl: './doc-form.component.html',
  styleUrls: ['./doc-form.component.css']
})
export class DocFormComponent implements OnInit {
  doc: Doc = {
    DId: 0,
    Aadhaar: "",
    Pan: "",
    Voter:"",
    SalarySlip:"",
    Loa: "",
    Noc:"",
    Agreement:"",
    CId: 0
  }
  constructor(private docservice : DockService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  
  docForm =new FormGroup({
    did: new FormControl("",[Validators.required]),
    aadhaar : new FormControl("",[Validators.required]),
    pan: new FormControl("", [Validators.required]),
    voter: new FormControl("", [Validators.required]),
    salaryslip: new FormControl("", [Validators.required]),
    loa: new FormControl("",[Validators.required]),
    noc: new FormControl("", [Validators.required]),
    agreement: new FormControl("", [Validators.required]),
    cid: new FormControl("",[Validators.required]),
  });
  docSubmitted(doc:Doc){

      this.doc=doc;
      console.log(doc);
      this.docservice.registerUser(this.doc).subscribe(
        ()=>{
          //alert("Documents submitted")
        
          this.router.navigate(['/formsubmitted'])
        }
      )
    }
    get DId() : FormControl{
      return this.docForm.get("did") as FormControl
    }
    get Aadhaar() : FormControl{
      return this.docForm.get("aadhaar") as FormControl
    }
    get Pan() : FormControl{
      return this.docForm.get("pan") as FormControl
    }
    get Voter() : FormControl{
      return this.docForm.get("voter") as FormControl
    }
    get SalarySlip() : FormControl{
      return this.docForm.get("salaryslip") as FormControl
    }
    get Loa() : FormControl{
      return this.docForm.get("loa") as FormControl
    }
    get Noc() : FormControl{
      return this.docForm.get("noc") as FormControl
    }
    get Agreement() : FormControl{
      return this.docForm.get("agreement") as FormControl
    }
    get CId() : FormControl{
      return this.docForm.get("cid") as FormControl
    }
}
