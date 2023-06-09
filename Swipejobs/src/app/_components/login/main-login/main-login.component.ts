import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterService } from 'src/app/_services/register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent {
  email = '';
  password= '';
  showPassword = false;
  constructor(private http: HttpClient,private router: Router) { }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  login() {
    const body = {
      email: this.email,
      password: this.password
    };
  
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post('http://localhost:8080/login', body).subscribe((response: any) => {
      console.log(response);
      console.log("Sikeres a login");
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('user_type');
      localStorage.setItem('token', response.token);
      localStorage.setItem('id', response.id);
      localStorage.setItem('user_type', response.user_type);
      this.router.navigate(['/dashboard']);
    }, (error) => {
      console.log(error);
      console.log("nem sikeres a login :(")

    });
  }
  

}




