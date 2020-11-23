import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {  Inject } from '@angular/core';
    
@Injectable({
    providedIn: 'root'
})
export class UserService{
    
       baseUrl:string
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    constructor(private httpClient: HttpClient,@Inject('BASE_URL') baseUrl: string) { 
        this.baseUrl=baseUrl
    }
  
    create(user): Observable<User> {
      return this.httpClient.post<User>(this.baseUrl + 'api/Users/', JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }  
    getById(id): Observable<User> {
      return this.httpClient.get<User>(this.baseUrl + 'api/Users/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
    }
  
    getAll(): Observable<User[]> {
      return this.httpClient.get<User[]>(this.baseUrl + 'api/Users/')
      .pipe(
        catchError(this.errorHandler)
      )
    }
  
    update(id, user): Observable<User> {
      return this.httpClient.put<User>(this.baseUrl + 'api/Users/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }
  
    delete(id){
      return this.httpClient.delete<User>(this.baseUrl + 'api/Users/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }
    errorHandler(error) {
       let errorMessage = '';
       if(error.error instanceof ErrorEvent) {
         errorMessage = error.error.message;
       } else {
         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       }
       console.log(errorMessage);
       return throwError(errorMessage);
    }
  }