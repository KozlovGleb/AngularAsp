import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AddUserComponent } from './adduser/adduser.component';
import { AllUsersComponent } from './allusers/allusers.component';
import { UsercartComponent } from './usercart/usercart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AddUserComponent,
    AllUsersComponent,
    UsercartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'CreateUser', component: AddUserComponent },
      { path: 'usercart/:id', component: UsercartComponent},
      { path: 'AllUsers', component: AllUsersComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
