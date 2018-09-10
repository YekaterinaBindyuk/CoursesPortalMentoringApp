import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { UserEntity } from '../../entities/user-entity';
import { AuthGuard } from '../auth/auth.guard';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private currentUser: UserEntity = new UserEntity;
  private subscription: Subscription;
  constructor(public authService: AuthService, private router: Router) {
  }

  public ngOnInit() {
    this.subscription = this.authService.getUserInfo().subscribe((user) => {
      this.currentUser = user;
    },
      (error: HttpErrorResponse) => console.log(error)
    );
  }

  public logout() {
    this.authService.logout();
    this.goToLoginPage();
  }

  public goToLoginPage() {
    this.router.navigate(['/login']);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
