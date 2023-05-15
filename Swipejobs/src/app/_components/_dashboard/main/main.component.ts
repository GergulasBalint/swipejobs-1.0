import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/_models/job';
import { JobServiceService } from 'src/app/_services/job-service.service';
@Component({
  selector: 'app-dashboardmain',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit {

  currentIndex = 0;
  jobs: Job[];

  constructor(private JobServiceService: JobServiceService) {
    this.jobs=[];
   }
   ngOnInit(): void {
    this.JobServiceService.getJobs()
      .subscribe(jobs => this.jobs = jobs);
  }


nextJob() {
  this.currentIndex++;
}

}
