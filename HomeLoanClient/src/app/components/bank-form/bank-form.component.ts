import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from 'src/app/model/Bank';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {
  bank: Bank = {
    BId:0,
    Name: "",
    AccNum: "",
    Ifsc:"",
    Cibil:0,
    CId: 0
  }
  constructor(private bankservice : BankService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  bankForm =new FormGroup({
    bid: new FormControl("",[Validators.required]),
    name : new FormControl("",[Validators.required]),
    accnum: new FormControl("", [Validators.required]),
    ifsc: new FormControl("", [Validators.required]),
    cibil: new FormControl("", [Validators.required]),
    cid: new FormControl("",[Validators.required]),
  });
  bankSubmitted(bank:Bank){

      this.bank=bank;
      console.log(bank);
      this.bankservice.registerUser(this.bank).subscribe(
        ()=>{
          //alert("Bank details submitted")
          console.log(bank)
          this.router.navigate(['/docform'])
        }
      )
    }
    get BId() : FormControl{
      return this.bankForm.get("bid") as FormControl
    }
    get Name() : FormControl{
      return this.bankForm.get("name") as FormControl
    }
    get AccNum() : FormControl{
      return this.bankForm.get("accnum") as FormControl
    }
    get Ifsc() : FormControl{
      return this.bankForm.get("ifsc") as FormControl
    }
    get Cibil() : FormControl{
      return this.bankForm.get("cibil") as FormControl
    }
    get CId() : FormControl{
      return this.bankForm.get("cid") as FormControl
    }
}