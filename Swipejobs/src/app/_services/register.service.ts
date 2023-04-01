import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  
  public regist(data: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post('http://localhost:8080/users', data, { headers, withCredentials: true })
      .pipe(
        catchError(error => {
          console.error('Error registering user:', error);
          return throwError(error);
        })
      );
}}
