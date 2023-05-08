import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-logged-in-mainpage',
  templateUrl: './logged-in-mainpage.component.html',
  styleUrls: ['./logged-in-mainpage.component.css']
})
export class LoggedInMainpageComponent implements OnInit{
  userType!: number;

  ngOnInit() {
    // Retrieve the userType value from local storage
    const userTypeStr = localStorage.getItem('user_type');
    if (userTypeStr !== null) {
      this.userType = parseInt(userTypeStr, 10);
    }
  }
}
