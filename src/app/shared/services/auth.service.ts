import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>({
      name: 'guiscr',
      email: 'devguiga@gmail.com',
      password: '#gui2023'
    });
  public currentUser: Observable<User | null> =
    this.currentUserSubject.asObservable();

  users: User[] = [];

  constructor(private router: Router) {}

  registerNewUser(user: User): void {
    this.users.push(user);
  }

  logIn(user: User): void {
    this.currentUserSubject.next(user);
    this.router.navigateByUrl('/board');

    // show green popup alerting user that their account is fine and welcome them.
  }

  logOut(): void {
    this.currentUserSubject.next(null);
  }

  isNewAccount(user: User): boolean {
    if (user.name) {
      return (
        this.users.find(
          ($user) => $user.name === user.name && $user.email === user.email
        ) === undefined
      );
    } else {
      return (
        this.users.find(($user) => $user.email === user.email) === undefined
      );
    }
    // isUndefined ? 'It is a new account' : 'It is not';
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }
}
