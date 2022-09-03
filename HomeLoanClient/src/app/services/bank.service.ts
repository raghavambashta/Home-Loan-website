import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from '../model/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  baseUrl:string = "http://localhost:64989/api/bank";
  constructor(private http:HttpClient) { }
  registerUser(bank:Bank){
    console.log(bank)
    return this.http.post<Bank>(this.baseUrl+'/addbank',JSON.stringify(bank),this.httpOptions)
  }
}