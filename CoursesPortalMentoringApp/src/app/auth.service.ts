import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: Boolean;

  constructor() { }

  login(login: string, password: string) {
    localStorage.setItem('user', 'login');
    console.log("logged in successfully");
    this.isAuthenticated = true;

  }

  logout(): void {
    localStorage.removeItem('user');
    console.log("logged out successfully");
    this.isAuthenticated = false;
  }

  getUserInfo(): string {
    return localStorage.getItem('user');
  }

  
}
