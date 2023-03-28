import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  getData() {
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    return this.http.get('http://localhost:8080/users', { headers });
  }

  public regist(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/users", data);
  }
  

}
