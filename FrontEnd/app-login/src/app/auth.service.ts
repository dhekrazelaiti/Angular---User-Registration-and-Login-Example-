import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {

messages = [];
constructor (private http: Http) {}

registerUser(registerData) {

  this.http.post('http://localhost:3000/register', registerData).subscribe(res => {
  });
}
loginUser(loginrData) {
  this.http.post('http://localhost:3000/login', loginrData).subscribe(res => {

  localStorage.setItem('token', res.json().token);

  });
}
}


