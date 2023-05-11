  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
  })
  export class ProfileComponent {
    user: any;
    userId=localStorage.getItem('id');
    firstName = 'John';
    lastName = 'Doe';
    gender = 'male';
    age = '';
    qualification = 'Írja be az adatait!';
    location = 'Írja be az adatait!';
    skills = 'Írja be az adatait!';
    bio = 'Írja be az adatait!';
    editingGender = false;
    editingAge = false;
    editingQualification = false;
    editingLocation = false;
    editingSkills = false;
    editingBio = false;
    profilePictureUrl = 'https://via.placeholder.com/150';
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
      this.http.get<any>(`http://localhost:8080/job-seekers/jobseeker/${this.userId}/cv`).subscribe(response => {
        this.gender = response.gender;
        this.age = response.age;
        this.qualification = response.qualification;
        this.location = response.location;
        this.skills = response.skills;
        this.bio = response.bio;
      }, error => {
        console.error('Error fetching user data.', error);
      } );
      

    }  
    onProfilePictureSelected(event: any) {

      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePictureUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }


      uploadProfilePicture() {
        const formData = new FormData();
        formData.append('picture', this.profilePictureUrl);
      
      
        this.http.put(`http://localhost:8080/job-seekers/jobseeker/${this.userId}/cv`, {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          age: this.age,
          qualification: this.qualification,
          location: this.location,
          skills: this.skills,
          bio: this.bio,
          profile_picture: this.profilePictureUrl
        }).subscribe(response => {
          console.log('Profile updated successfully.');
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
        case 'gender':
          this.editingGender = !this.editingGender;
          break;
        case 'age':
          this.editingAge = !this.editingAge;
          break;
        case 'qualification':
          this.editingQualification = !this.editingQualification;
          break;
        case 'location':
          this.editingLocation = !this.editingLocation;
          break;
        case 'skills':
          this.editingSkills = !this.editingSkills;
          break;
        case 'bio':
          this.editingBio = !this.editingBio;
          break;
        default:
          break;
      }  }
  }

