import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private userLogin: string;
  private password: string;
  private loginMessage = 'login';

  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit() {
  }

  public login() {
    this.authService.login(this.userLogin, this.password);
    let fakeToken = this.authService.getToken();
    localStorage.setItem('token', fakeToken);
    this.router.navigate(['/courses']);
  }

}
