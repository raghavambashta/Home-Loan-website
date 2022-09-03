import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Applicant } from '../model/Applicant';

@Injectable({
  providedIn: 'root'
})

export class ApplicantService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  baseUrl:string = "http://localhost:64989/api/applicant";
  constructor(private http:HttpClient) { }
  registerUser(applicant:Applicant){
    console.log(applicant)
    return this.http.post<Applicant>(this.baseUrl+'/addapplicant',JSON.stringify(applicant),this.httpOptions)
  }
}
