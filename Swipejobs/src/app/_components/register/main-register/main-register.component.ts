import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterService } from 'src/app/_services/register.service';

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

  constructor(
    private registerService: RegisterService,
    private http: HttpClient
  ) {}
  onSubmit() {
    const user = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      user_type: parseInt(this.workType) 
    };
    
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
    this.http.post('http://localhost:8080/users', JSON.stringify(user), {headers})
      .toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
}  