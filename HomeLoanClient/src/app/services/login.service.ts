import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../model/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  baseUrl:string = "http://localhost:64989/api/login";
  constructor(private http:HttpClient) { }
  verifyUser(login:Login){
    console.log(login)
    return this.http.post<Login>(this.baseUrl,JSON.stringify(login),this.httpOptions)
  }
}
