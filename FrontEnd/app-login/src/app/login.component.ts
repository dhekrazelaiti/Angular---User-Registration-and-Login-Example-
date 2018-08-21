import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(public authService: AuthService) {}
  loginData = {};
   post() {
    console.log(this.loginData);
    this.authService.loginUser(this.loginData);
   }
}
