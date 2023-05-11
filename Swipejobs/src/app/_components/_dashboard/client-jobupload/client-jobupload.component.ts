import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-jobupload',
  templateUrl: './client-jobupload.component.html',
  styleUrls: ['./client-jobupload.component.css']
})
export class ClientJobuploadComponent implements OnInit {
  title = '';
  description = '';
  priceType = '';
  fixedPrice = 0;
  hourlyPrice = 0;
  imageSrc = 'assets/suitcase.png';

  constructor() { }

  ngOnInit(): void {
  }

  onPriceTypeChanged(type: string): void {
    if (type === 'fixed') {
      this.priceType = 'fixed';
      this.hourlyPrice = 0;
    } else if (type === 'hourly') {
      this.priceType = 'hourly';
      this.fixedPrice = 0;
    }
  }

  onSubmit(): void {
    // TODO: Implement job upload functionality here
  }
}

