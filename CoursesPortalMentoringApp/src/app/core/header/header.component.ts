import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    loginMessage ='User Login';
    logoutMessage ='log out';

  constructor(public authService: AuthService) {
   }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
