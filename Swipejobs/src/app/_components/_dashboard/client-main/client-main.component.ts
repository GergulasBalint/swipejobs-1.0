import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-main',
  templateUrl: './client-main.component.html',
  styleUrls: ['./client-main.component.css']
})
export class ClientMainComponent implements OnInit {
  userId = localStorage.getItem('id');
  jobsCount=0;
  hasJob = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(`http://localhost:8080/clients/client/${this.userId}`)
      .subscribe(response => {
        this.jobsCount = response.jobsCount;
        if (this.jobsCount > 0) {
          this.hasJob = true;
        }}, error => {
        console.error('Error fetching user data.', error);
      });
  }


}
