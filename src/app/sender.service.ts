import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Senderdetails } from './senderdetails';
@Injectable({
  providedIn: 'root'
})
export class SenderService {
 
  constructor(private httpclient:HttpClient) { }
 public getSenderId(customerId:number){
  return this.httpclient.get("http://localhost:8081/checkBalance?custid="+customerId);
 }
 public getUser(customerId:number){
  return this.httpclient.get("http://localhost:8081/details/"+customerId);
 }
}
