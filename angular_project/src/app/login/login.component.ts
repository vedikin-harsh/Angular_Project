import { Router, Routes } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  username = '';
  password = '';
  errorMsg = '';

  constructor(
    private auth: AuthService, 
    private router: Router
    ) {}

  ngOnInit(): void {}
  
  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = ' Username Is Required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = ' Password Is Required';
    } else {
      this.errorMsg = '';
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errorMsg = 'Invalid Credentials';
      }
    }
  }
}
