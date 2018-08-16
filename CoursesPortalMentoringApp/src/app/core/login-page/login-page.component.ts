import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userLogin: string;
  password: string;
  loginMessage = 'login';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.authService.login(this.userLogin, this.password);
    this.router.navigate(['/courses']);
  }

}
