import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClientMainComponent } from '../client-main/client-main.component';
@Component({
  selector: 'app-client-jobupload',
  templateUrl: './client-jobupload.component.html',
  styleUrls: ['./client-jobupload.component.css']
})
export class ClientJobuploadComponent implements OnInit {
  @Output() jobUploaded = new EventEmitter<void>();
  clientId=localStorage.getItem('id');

  title = '';
  description = '';
  priceType = "Fixed-price";
  fixedPrice = 0;
  hourlyPrice = 0;
  imageSrc = 'assets/suitcase.png';
  location='';
  foglalkoztatas_jellege= '';
  costHUF=0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onPriceTypeChanged(type: string): void {
    if (type === 'fixed') {
      this.priceType = 'Fixed-price';
      this.hourlyPrice = 0;
    } else if (type === 'hourly') {
      this.priceType = 'hourly';
      this.fixedPrice = 0;
    }
  }
  onFoglalkoztatasJellegeChanged(type: string): void {
    this.foglalkoztatas_jellege = type;
  }
  onSubmit(): void {
    const jobData = {
      title: this.title,
      work_type: this.priceType,
      costHUF: this.costHUF,
      location: this.location,
      foglalkoztatas_jellege: this.foglalkoztatas_jellege,
      description: this.description
    };
    
    this.http.post(`http://localhost:8080/jobs/${this.clientId}`, jobData).subscribe((response) => {
      console.log('Job created successfully', response);
      this.http.patch(`http://localhost:8080/clients/${this.clientId}/incrementJobCount`, { jobsCount: 1 }).subscribe((response) => {
        console.log('Job count updated successfully', response);
      }, (error) => {
        console.error('Error updating job count', error);
      });
      window.alert("Sikeresen feltöltötted a munkát!");
       this.jobUploaded.emit();
    }, (error) => {
      console.error('Error creating job', error);
    });
  }
}
