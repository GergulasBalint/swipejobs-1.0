import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-guard-component',
  templateUrl: './auth-guard-component.component.html',
  styleUrls: ['./auth-guard-component.component.css']
})
export class AuthGuardComponentComponent {


    constructor(private router: Router) { }
  
    ngOnInit() {
      // Replace this with authentication logic
      const isLoggedIn = true;
  
      if (isLoggedIn) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/welcome']);
      }
    }
  }
  

