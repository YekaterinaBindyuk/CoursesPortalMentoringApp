import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of as ObservableOf } from 'rxjs'; 
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  public canActivate(): Observable <boolean> {
    this.auth.getUserInfo();
    if (this.auth.isAuthenticated()) {
      return ObservableOf(true);
    } else {
        this.router.navigate(['/login']);
      return ObservableOf(false);
    }

  }
 /* private currentAuth: Promise<boolean>;
  public async init(): Promise<boolean> {
    if (this.inFlight) {
        return this.currentAuth;
    } else {
        this.inFlight = true;
        return (this.currentAuth = this.initiate().then(res => (this.inFlight = res)));
    }
} */
}
