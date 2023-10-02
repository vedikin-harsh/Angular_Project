import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (
    private router :Router,
    private auth :AuthService
  ) {}
  GoToHome () {
    this.router.navigate(['home']);
  }
  LogOut() {
    this.auth.logout()
  }
}
