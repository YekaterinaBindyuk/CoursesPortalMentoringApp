import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { UserEntity } from '../../entities/user-entity';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of as ObservableOf, Subscription } from 'rxjs'; 
import { Token } from '../../entities/token';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authenticated: boolean;
  private currentUser: UserEntity;
  private token: Token;
  private usersUrl = 'http://localhost:3004/users';
  private subscription: Subscription;
  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
  }

  public login(login: string, password: string): Observable<Boolean> {
    this.subscription = this.userService.getUserByCredentials(login, password).subscribe((resp) => {
      this.token = resp;
      console.log(this.token.token);
      this.authenticated = true; 
      localStorage.setItem('token', this.token.token);
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



}
