import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prop } from '../model/Prop';

@Injectable({
  providedIn: 'root'
})
export class PropService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  baseUrl:string = "http://localhost:64989/api/prop";
  constructor(private http:HttpClient) { }
  registerUser(prop:Prop){
    console.log(prop)
    return this.http.post<Prop>(this.baseUrl+'/addprop',JSON.stringify(prop),this.httpOptions)
  }
}