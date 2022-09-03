import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {

  public income:any;
  public num3:any;

  constructor() { }

  ngOnInit(): void {
  }
  div(){
    if(this.income == undefined){
      this.income = 0;
      
    }
    this.num3=(60*0.6*this.income);

  }
  setEligibility(value:any) {
    this.income = value;  
  }
}
