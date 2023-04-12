import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterService } from 'src/app/_services/register.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent {
  email = '';
  password= '';
  constructor(private http: HttpClient) { }

  login() {
    const body = {
      email: this.email,
      password: this.password
    };
  
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post('http://localhost:8080/login', body).subscribe((response: any) => {
      console.log(response);
      console.log("Sikeres a login");
      localStorage.setItem('token', response.token); // Store token in localStorage
    }, (error) => {
      console.log(error);
      console.log("nem sikeres a login :(")
      // handle login error here
    });
  }
  

}




