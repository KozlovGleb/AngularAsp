import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService} from '../service/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'allusers-data',
  templateUrl: './allusers.component.html',
  providers: [UserService]
})
export class AllUsersComponent {
  
  public user: user[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,private UserService:UserService,private router: Router) {
    http.get<user[]>(baseUrl + 'api/Users').subscribe(result => {
      this.user = result;
    }, error => console.error(error));
  }
  redirect() {
    this.router.navigate(['/CreateUser']);
  }
}

interface user {
  id: number;
  name: string;
  yearOfBirth: number;
  phoneNumber: string;
}
