import { Injectable } from '@angular/core';
import { User } from '../domain/user.interface';
import { USERS } from '../domain/users.data';
import { UserRequest } from '../domain/user.request';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private user: User | null = null;

  constructor(

  ) { }

  login(user: UserRequest): Observable<boolean> {
    const match = USERS.find(
      existingUser => existingUser.username === user.username && existingUser.password === user.password);
    if (match) {
      this.loggedIn = true;
      this.user = match;
      localStorage.setItem('role', this.user.role);
      return of(true)
    }
    return of(false);
  }


  logout(): Observable<boolean> {
    this.loggedIn = false;
    this.user = null;
    localStorage.removeItem('role');
    return of(true);
  }

  isLoggedIn(): boolean {
    return this.getRole() !== null;
  }

  getRole(): string | null {
    return localStorage.getItem('role')
  }

}
