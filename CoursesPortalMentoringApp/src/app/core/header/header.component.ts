import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private loginMessage: string = 'You are logged in';
  private logoutMessage = 'log out';

  constructor(public authService: AuthService, private router: Router) {
  }

  public ngOnInit() {
  }

  public logout() {
    this.authService.logout();
    this.goToLoginPage();
  }

  public goToLoginPage() {
    this.router.navigate(['/login']);
  }

}
