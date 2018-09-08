import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEntity } from '../../entities/user-entity';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private currentUser: UserEntity = new UserEntity; 
  constructor(public authService: AuthService, private router: Router) {
  }

  public ngOnInit() {
    if (this.authService.isAuthenticated()){this.authService.getUserInfo().subscribe((user) => {
      this.currentUser = user;
    },
      (error: HttpErrorResponse) => console.log(error)
    );
  }
  }

  public getUserInfo(){
    this.authService.getUserInfo().subscribe((res) => {console.log('header resp '+res)},
    (error: HttpErrorResponse) => console.log('error')
  );
  }

  public logout() {
    this.authService.logout();
    this.goToLoginPage();
  }

  public goToLoginPage() {
    this.router.navigate(['/login']);
  }


}
