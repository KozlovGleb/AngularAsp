import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usercart',
   templateUrl: './usercart.component.html',
 
})
export class UsercartComponent implements OnInit {
  id: number;
  public user: User;
  constructor(public fm:ReactiveFormsModule,public fb: FormBuilder,private router:Router,private activateRoute: ActivatedRoute,private serv: UserService) {
    this.id = activateRoute.snapshot.params['id'];
   }

  ngOnInit() {
    
    this.serv.getById(this.id).subscribe(res => {
      this.user = res;})
     
  }
  save() {
        this.serv.update(this.user.id,this.user).subscribe(res => {
          this.user = res;});
        this.router.navigate(['/AllUsers']);
        
}
delete(id:User) {
  this.serv.delete(this.id).subscribe(res => {
    this.user = res;})
  this.router.navigate(['/AllUsers']);
    
}

}