import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { UserEntity } from '../../entities/user-entity';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authenticated: boolean;
  private currentUser: UserEntity;
  private token: string;
  private usersUrl = 'http://localhost:3004/users';
  constructor(private http: HttpClient, private userService: UserService) {
  }

  public login(login: string, password: string) {
  this.userService.getUserByCredentials(login, password).subscribe((token) => {
    console.log('logged in successfully');
    this.token = token;
    this.authenticated = true;
  },
    (error: HttpErrorResponse) => console.log(error)
  );

}
  public logout(): void {
    localStorage.removeItem('token');
    console.log('logged out successfully');
  }

  public getUserInfo(): void {
    this.userService.getUserInfo().subscribe((user) => {
      this.currentUser = user;
    },
      (error: HttpErrorResponse) => console.log(error)
    );
  
  }

  public isAuthenticated(): boolean {
      return true;
    
  }

  public getToken(): string {
    return this.token;

  }

}
