import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../_models/job';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getJobs(): Observable<Job[]> {
    const url = `${this.baseUrl}/jobs/alljobs`;
    return this.http.get<Job[]>(url);
  }
}
