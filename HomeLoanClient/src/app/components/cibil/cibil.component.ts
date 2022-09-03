import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cibil',
  templateUrl: './cibil.component.html',
  styleUrls: ['./cibil.component.css']
})
export class CibilComponent implements OnInit {
  public civil: any;
  
  public num3: any; 

  public count=0; 
  constructor() { }

  ngOnInit(): void {
  }
  div(){
    if(this.count == 0){
      if(this.civil != undefined)
      {
        if(this.civil.length == 10)
        {
          let x = (Math.random() + 7)*100;
          x = Math.floor(x);
          this.num3 = x;
          this.count++;
        }else{
          this.num3 = "PAN number invalid!"
        }
      }else{
        this.num3 = "PAN number invalid!"
      } 
    }
  }

}
