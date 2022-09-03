import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from '../model/Emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  baseUrl:string = "http://localhost:64989/api/emp";
  constructor(private http:HttpClient) { }
  registerUser(emp:Emp){
    console.log(emp)
    return this.http.post<Emp>(this.baseUrl+'/addemp',JSON.stringify(emp),this.httpOptions)
  }
}
