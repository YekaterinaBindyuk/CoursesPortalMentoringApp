import { Injectable } from '@angular/core';
import { UserEntity } from '../entities/user-entity';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authUrl = 'http://localhost:3004/auth';

  constructor(private http: HttpClient) { }
  
  public getUserByCredentials(login: string, password: string): Observable<string> {
    const url = this.authUrl + '/login';
    return this.http.post<string>(url, {params: {login, password}});
  }

  public getUserInfo(): Observable<UserEntity> {
    const url = this.authUrl + '/userinfo';
    return this.http.post<UserEntity>(url, {});
  }
}
