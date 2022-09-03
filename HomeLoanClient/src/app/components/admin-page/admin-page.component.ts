import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  credlist:any[]=[]
  constructor(private adminservice:AdminService) { 
    this.adminservice.getCredList().subscribe(data=>{
      this.credlist=data
    })
  }
  
  ngOnInit(): void {
  }

}
