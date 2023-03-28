import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/_services/register.service';
@Component({
  selector: 'app-main-register',
  templateUrl: './main-register.component.html',
  styleUrls: ['./main-register.component.css']
})
export class MainRegisterComponent {
  firstName: string ='';
  lastName: string = '';
  email: string =''; 
  password: string='';
  workType: string='';

  
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
      "user-type": "1"
    };

    let user2 = {
      "first_name":"TESZTfirstname",
      "last_name":"TESZTlastname",
      "email":"teszt9@gmail.com",
      "password":"tesztpassword",
      "user-type":"1"
    }

    this.registerService.regist(JSON.stringify(user2)).subscribe(res=>{
      console.log(res)
    },err=>{
      console.error(err)
    })
}

  
}
