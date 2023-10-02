import { Route, Router } from '@angular/router';
import { LoginComponent } from './../login/login.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(uname: string, pword: string) {
    if (uname === 'Harsh' && pword === '2110') {
      return 200;
    } else {
      return 403;
    }
  }
  logout() {
    this.router.navigate(['login']);
  }
}
