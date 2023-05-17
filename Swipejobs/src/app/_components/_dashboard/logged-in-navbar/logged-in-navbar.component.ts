import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logged-in-navbar',
  templateUrl: './logged-in-navbar.component.html',
  styleUrls: ['./logged-in-navbar.component.css']
})
export class LoggedInNavbarComponent {
  constructor() { }
  signOut(): void {

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('user_type');
    window.location.href = '/login';
  }

}
