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
      name: 'guilhermescr',
      email: 'devguiga@gmail.com',
      password: 'omelhorem2023',
    });
  public currentUser: Observable<User | null> =
    this.currentUserSubject.asObservable();

  users: User[] = [
    {
      name: 'guilhermescr',
      email: 'devguiga@gmail.com',
      password: 'omelhorem2023',
    },
  ];

  constructor(private router: Router) {}

  registerNewUser(user: User): void {
    this.users.push(user);
  }

  logIn({ email }: User): void {
    const userData = this.getAllDataAboutUser(email);

    if (userData) {
      this.currentUserSubject.next(userData);
      this.router.navigateByUrl('/board');

      // show green popup alerting user that their account is fine and welcome them.
    }
  }

  logOut(): void {
    /*
      Delete Account Code:
      this.users = this.users.filter(
      (user) => user.email !== this.currentUserSubject.value?.email
    );
    */

    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/signin');
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

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getAllDataAboutUser(userEmail: string): User | null {
    const allData = this.users.find((user) => user.email === userEmail);

    return allData ? allData : null;
  }
}
