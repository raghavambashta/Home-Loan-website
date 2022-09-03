import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  
  public loan: any;
  public time: any;
  public roi:Number=8.5;

  public noOfMonths:any;
  public num3: any;
  public monthlyRate:any;
  public oneplusR:any;
  public denominator:any;
  constructor() { }

  ngOnInit(): void {
  }
  //calculating monthly emi for the customer
  div(){
    if(this.loan == undefined || this.time == undefined){
      this.loan = 0;
      this.time = 1;
    }
    this.noOfMonths=Number(this.time) * 12;
    this.monthlyRate=Number(this.roi)/(12*100)
    this.oneplusR=Math.pow(1+this.monthlyRate,Number(this.noOfMonths))
    this.denominator=this.oneplusR-1;
    
    this.num3=(Number(this.loan)*Number(this.monthlyRate)*(this.oneplusR/this.denominator)).toPrecision(5);
  }
  setLoan(value: any) {
    this.loan = value;  
  } 
  setTime(value: any) {
    this.time = value;  
  } 
}
