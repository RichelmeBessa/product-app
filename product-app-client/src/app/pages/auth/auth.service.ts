import { Injectable } from '@angular/core';
import { User } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  [x: string]: any;

  private mAuthenticated = false;

  get authenticated() {
    return this.mAuthenticated;
  }

  login(user: User) { 
    if(user.username == 'root' && user.password === 'admin') {
      this.mAuthenticated = true;
    }
  }

  logout() {
    this.mAuthenticated = false;
  }
}