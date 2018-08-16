import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authenticated: boolean;

  constructor() {

  }

  public login(login: string, password: string) {
    localStorage.setItem('user', 'login');
    console.log('logged in successfully');
    this.authenticated = true;
  }

  public logout(): void {
    localStorage.removeItem('user');
    console.log('logged out successfully');
    this.authenticated = false;
  }

  public getUserInfo(): string {
    return localStorage.getItem('user');
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

}
