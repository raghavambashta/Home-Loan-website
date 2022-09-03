import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UseraccountService } from 'src/app/services/useraccount.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  applicantdata:any = { }
  id:number=0
  constructor(private activateroute:ActivatedRoute, private useraccountservice:UseraccountService) { }

  ngOnInit(): void {
    //console.log(User.cid)
    this.useraccountservice.getApplicant(User.cid).subscribe((data:any)=>{
      this.applicantdata=data
      console.log(data)
    })
  }

}
