import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterService } from 'src/app/_services/register.service';
import { NgForm } from '@angular/forms';
import { Token } from '@angular/compiler';

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
  constructor(
    private registerService: RegisterService,
    private http: HttpClient
  ) {}

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
      // Register the user and set registrationSuccess to true
      this.registrationSuccess = true;
    } else {
      // Set registrationFailed to true
      this.registrationFailed = true;
    }
    

  
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
    this.http.post('http://localhost:8080/users', JSON.stringify(user), {headers})
      .toPromise()
      .then(res => {
        localStorage.setItem('user_type',this.workType);
        console.log(res);
        window.location.href = '/dashboard';
      })
      .catch(err => {
        console.error(err);
      });
  }
}
