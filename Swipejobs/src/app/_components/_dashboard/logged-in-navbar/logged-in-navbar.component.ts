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
    // Clear the authentication token from the local storage
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    // Redirect the user to the sign-in page
    window.location.href = '/login';
  }

}
