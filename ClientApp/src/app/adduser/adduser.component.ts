
import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

   
@Component({ 
    selector: 'adduser-component', 
    templateUrl: './adduser.component.html',
    providers: [UserService]
}) 
export class AddUserComponent implements OnInit {
      adduserForm: FormGroup;
       

       
    constructor(public fb: FormBuilder,
  private router: Router,private serv: UserService) {
    }
       
    ngOnInit() {
  this.adduserForm = this.fb.group({
    name: ['',[Validators.required,Validators.pattern('^[А-Яа-яЁё\\s]+$'),Validators.minLength(3), Validators.maxLength(20)]],
    yearOfBirth: [0,[Validators.required,Validators.min(1900),Validators.max(2020)]],
    phoneNumber: ['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(12)]]
   
  })
    }
       submitForm() {
  this.serv.create(this.adduserForm.value).subscribe(res => {
    this.router.navigateByUrl('/AllUsers')})

}
  
   
    
}