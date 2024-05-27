import { Injectable } from '@angular/core';
import { User } from '../domain/user.interface';
import { USERS } from '../domain/users.data';
import { UserRequest } from '../domain/user.request';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  #user: User | null = null;

  constructor(

  ) { }

  login(user: UserRequest): Observable<boolean> {
    const match = this.findUserMatch(user);
    match && this.setUser(match);
    return of(!!match);
  }

  logout(): Observable<boolean> {
    this.#user = null;
    localStorage.removeItem('role');
    return of(true);
  }

  setUser(user: User) {
    this.#user = user;
    localStorage.setItem('role', this.#user.role);
  }

  findUserMatch(user: UserRequest): User | undefined {
    return USERS.find(
      existingUser => existingUser.username === user.username && existingUser.password === user.password);
  }

  isLoggedIn(): boolean {
    return this.getRole() !== null;
  }

  getRole(): string | null {
    return localStorage.getItem('role')
  }

}
