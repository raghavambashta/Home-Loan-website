import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doc } from '../model/Doc';

@Injectable({
  providedIn: 'root'
})
export class DockService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  baseUrl:string = "http://localhost:64989/api/doc";
  constructor(private http:HttpClient) { }
  registerUser(doc:Doc){
    console.log(doc)
    return this.http.post<Doc>(this.baseUrl+'/adddoc',JSON.stringify(doc),this.httpOptions)
  }
}
