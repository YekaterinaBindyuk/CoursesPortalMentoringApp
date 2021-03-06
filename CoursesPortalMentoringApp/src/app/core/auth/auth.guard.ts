import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of as ObservableOf, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  public canActivate(): Observable<boolean> {
    const subject = new Subject<boolean>();
    this.auth.getUserInfo().subscribe((res: Response) => {
        subject.next(true);
        this.auth.setAuthenticated(true);
    },
      (error) => {
        subject.next(false);
        this.auth.setAuthenticated(false);
        this.router.navigate(['/login']);
      }, () => {
        subject.complete();
      }
    );

    return subject;
  }
}
