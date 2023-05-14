import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {  user: any;
  userId=localStorage.getItem('id');
  firstName = 'John';
  lastName = 'Doe';
  company = '';
  tax_number = '';
  location = 'Írja be az adatait!';
  editingCompany = false;
  editingTax_number = false;
  editingLocation = false;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    {
  const id = localStorage.getItem('id');
  const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});

  this.http.get(`http://localhost:8080/users/${id}`, {headers})
    .subscribe((response: any) => {
      this.user = response;
    });
  }

    console.log(this.userId);
    this.http.get<any>(`http://localhost:8080/users/${this.userId}`).subscribe(response => {
      this.firstName = response.first_name;
      this.lastName = response.last_name;
    }, error => {
      console.error('Error fetching user data.', error);
    });
    this.http.get<any>(`http://localhost:8080/clients/client/${this.userId}`).subscribe(response => {
      this.company = response.company;
      this.tax_number = response.tax_number;
      this.location = response.location;
    }, error => {
      console.error('Error fetching user data.', error);
    } );
    

  }  
    uploadData() {
    
      this.http.put(`http://localhost:8080/clients/client/${this.userId}`, {
        firstName: this.firstName,
        lastName: this.lastName,
        company: this.company,
        tax_number: this.tax_number,
        location: this.location
      }).subscribe(response => {
        console.log('Profile updated successfully.');
        window.alert("Adatok sikeresen feltöltve!")
      }, error => {
        console.error('Error updating profile.', error);
      });
    }
  
    printId() {
      const id = this.userId;
      console.log(id);
    }
    
  toggleEditing(field: string) {
    switch (field) {
      case 'Company':
        this.editingCompany= !this.editingCompany;
        break;
      case 'tax_number':
        this.editingTax_number = !this.editingTax_number;
        break;
      case 'location':
        this.editingLocation = !this.editingLocation;
        break;
      default:
        break;
    }  }
}




