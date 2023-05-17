import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/_models/job';
import { JobServiceService } from 'src/app/_services/job-service.service';

@Component({
  selector: 'app-dashboardmain',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  jobSeekerId=localStorage.getItem("id");
  user_type=localStorage.getItem("user_type");
  currentIndex = 0;
  jobs: Job[];

  constructor(private jobServiceService: JobServiceService) {
    this.jobs = [];
  }

  ngOnInit(): void {
    this.jobServiceService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      if (this.jobs.length > 0) {
        this.currentIndex = 0;
      }
    });
  }



  ApproveJob() {
    if (this.jobs.length > 0 && this.currentIndex < this.jobs.length) {
      const selectedJob = this.jobs[this.currentIndex];
      
      const matchedRequestModel = {
        jobId: selectedJob.id,
        jobSeekerId: this.jobSeekerId, 
        clientId: selectedJob.client_id,
        user_type: this.user_type,
        apply: true
      };
  
      this.jobServiceService.applyForJob(matchedRequestModel)
        .subscribe(response => {

          console.log(response);
          
          
        }, error => {
          
          console.error(error);
        });
    }
    this.currentIndex++;
  }
  

  DenyJob() {
    if (this.jobs.length > 0 && this.currentIndex < this.jobs.length) {
      const selectedJob = this.jobs[this.currentIndex];
      const matchedRequestModel = {
        jobId: selectedJob.id,
        jobSeekerId: this.jobSeekerId, 
        clientId: selectedJob.client_id,
        user_type: this.user_type,
        apply: false
      };
  
      this.jobServiceService.applyForJob(matchedRequestModel)
        .subscribe(response => {

          console.log(response);
          this.currentIndex++;
        }, error => {
          console.error(error);
        });
    }
  }
}
