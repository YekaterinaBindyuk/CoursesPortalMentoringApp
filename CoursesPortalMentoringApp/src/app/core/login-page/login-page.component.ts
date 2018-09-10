import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormControl, Validators, Form } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  private loginMessage = 'login';
  private subject: Subject<boolean>;
  private subscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {}
  private userLogin: FormControl = new FormControl('', [Validators.required]);
  private password: FormControl = new FormControl('', [Validators.required]);

  public ngOnInit() {
  }

  public login() {
    this.subject = new Subject<boolean>();
    this.subscription = this.authService.login(this.userLogin.value,
      this.password.value).subscribe((res) => { console.log('logged in successfuly');
      this.authService.setAuthenticated(true); }
  ); }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
