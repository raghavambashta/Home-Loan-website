import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from 'src/app/model/Applicant';
import { UseraccountService } from 'src/app/services/useraccount.service';
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  applicantdata:any = {
    // UId: 0,
    // FirstName: "",
    // MiddleName:"",
    // LastName: "",
    // Dob: new Date(),
    // Gender: "",
    // Nationality: "",
    // AadharNum: "",
    // PanNum: "",
    // CId:0
  }
  id:number=0
  constructor(private activateroute:ActivatedRoute, private useraccountservice:UseraccountService) { }

  ngOnInit(): void {
    console.log(User.cid)
    this.useraccountservice.getApplicant(User.cid).subscribe((data:any)=>{
      this.applicantdata=data
      console.log(data)
    })
  }

}
