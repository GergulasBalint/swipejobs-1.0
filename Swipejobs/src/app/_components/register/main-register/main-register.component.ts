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
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  constructor(
    private registerService: RegisterService,
    private http: HttpClient
  ) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  validatePassword(): boolean {
    return this.passwordPattern.test(this.password);
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
     
      this.registrationSuccess = true;
    } else {

      this.registrationFailed = true;
    }
    

  
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

this.http.post('http://localhost:8080/users', JSON.stringify(user), {headers})
  .subscribe((response: any) => {
    localStorage.setItem('user_type', this.workType);
    localStorage.setItem('token', response.token);
    localStorage.setItem('id', response.id);
    localStorage.setItem('user_type', response.user_type);
    console.log(response);
    console.log(localStorage.getItem('id'));
    
    const body = {email: user.email, password: user.password};
    this.http.post('http://localhost:8080/login', body).subscribe((response: any) => {
      console.log(response);
      console.log("Sikeres a login");
      localStorage.setItem('token', response.token);
      localStorage.setItem('id', response.id);
      localStorage.setItem('user_type', response.user_type);
      window.location.href="/dashboard"
    }, (error) => {
      console.log(error);
      console.log("nem sikeres a login :(")

    });
  })

  
}
}
