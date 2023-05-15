import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-register',
  templateUrl: './main-register.component.html',
  styleUrls: ['./main-register.component.css']
})
export class MainRegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  workType = '';
  registrationFailed = false;
  registrationSuccess = false;
  showPassword = false;
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


  constructor(private http: HttpClient) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(form: NgForm) {
    const user = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      user_type: parseInt(this.workType) 
    };

    if (form.valid) {
      this.registrationFailed = false; // Reset registration failed status
      // Send HTTP request to register the user
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post('http://localhost:8080/users', JSON.stringify(user), { headers })
        .toPromise()
        .then(res => {
          this.registrationSuccess = true; // Set registration success status
          localStorage.setItem('user_type', this.workType);
          console.log(res);
          window.location.href = '/dashboard';
        })
        .catch(err => {
          console.error(err);
          this.registrationFailed = true; // Set registration failed status
        });
    } else {
      this.registrationFailed = true; // Set registration failed status
    }
  }

  validatePassword(): boolean {
    return this.passwordPattern.test(this.password);
  }
}
