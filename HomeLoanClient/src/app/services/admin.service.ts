import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  url:string = "http://localhost:64989/api/cred";
  constructor(private httpclient:HttpClient) { }
  getCredList():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'/listcred')
  }
}
