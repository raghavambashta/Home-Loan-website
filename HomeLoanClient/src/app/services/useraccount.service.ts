import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../model/Applicant';
import { Cred } from '../model/cred';
import { Emp } from '../model/Emp';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  url:string = "http://localhost:64989/api/cred";
  constructor(private httpclient:HttpClient) { }
  getApplicant (id:number):Observable<Cred>{
    return this.httpclient.get<Cred>(this.url+'/userpage/'+id)
  }

}