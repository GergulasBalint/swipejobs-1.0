import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent implements OnInit{
  userType!: number;

  ngOnInit() {
    // Retrieve the userType value from local storage
    const userTypeStr = localStorage.getItem('user_type');
    if (userTypeStr !== null) {
      this.userType = parseInt(userTypeStr, 10);
    }
  }
}
