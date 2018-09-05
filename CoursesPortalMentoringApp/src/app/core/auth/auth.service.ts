import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { UserEntity } from '../../entities/user-entity';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of as ObservableOf, Subscription } from 'rxjs'; // since RxJs 6

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authenticated: boolean;
  private currentUser: UserEntity;
  private token: string;
  private usersUrl = 'http://localhost:3004/users';
  private subscription: Subscription;


  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
  }

  public login(login: string, password: string): Observable<Boolean>{
    this.subscription = this.userService.getUserByCredentials(login, password).subscribe((token) => {
    this.token = token;
    this.authenticated = true;
    localStorage.setItem('token', token);
    console.log(token);
    this.router.navigate(['/courses']);
    return ObservableOf(true);
  },
    (error: HttpErrorResponse) => console.log(error));
    return ObservableOf(true);

}
  public logout(): void {
    localStorage.removeItem('token');
    this.authenticated = false;
    console.log('logged out successfully');
  }

  public getUserInfo(): Observable<any> {
    return this.userService.getUserInfo();
  
  }

  public isAuthenticated(): boolean {
      return this.authenticated;
    
  }

  public getToken(): string {

    console.log(this.token);
    return this.token;

  }

}
