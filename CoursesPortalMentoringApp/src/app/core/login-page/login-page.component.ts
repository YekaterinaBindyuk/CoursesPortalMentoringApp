import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormControl, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private loginMessage = 'login';

  constructor(private authService: AuthService, private router: Router) { }
  
  private userLogin: FormControl = new FormControl('', [Validators.required]);
  private password: FormControl = new FormControl('', [Validators.required]);

  public ngOnInit() {
  }

  public login() {
    this.authService.login(this.userLogin.value, this.password.value).subscribe((res) => console.log('logged in successfuly'));
  }

}
