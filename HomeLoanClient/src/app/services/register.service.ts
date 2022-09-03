import { Injectable } from '@angular/core';
import { RegisterComponent } from '../components/register/register.component';
import { Cred } from '../model/cred';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  baseUrl:string = "http://localhost:64989/api/cred";
  constructor(private http:HttpClient) { }
  registerUser(cred:Cred){
    console.log(cred)
    return this.http.post<Cred>(this.baseUrl+'/addcred',JSON.stringify(cred),this.httpOptions)
  }
}
