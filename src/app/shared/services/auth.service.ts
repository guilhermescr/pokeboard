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
      id: '1',
      name: 'guilhermescr',
      currentProfilePicture: 'Ash',
      email: 'devguiga@gmail.com',
      password: 'omelhorem2023',
      favoritePokemonList: [],
    });
  public currentUser: Observable<User | null> =
    this.currentUserSubject.asObservable();

  users: User[] = [
    {
      id: '1',
      name: 'guilhermescr',
      currentProfilePicture: 'Ash',
      email: 'devguiga@gmail.com',
      password: 'omelhorem2023',
      favoritePokemonList: [],
    },
  ];

  constructor(private router: Router) {
    this.currentUser.subscribe((currentUserData) => {
      if (currentUserData) {
        this.updateUsers(currentUserData);
      }
    });
  }

  registerNewUser(user: User): void {
    this.users.push(user);
  }

  updateUsers(updatedUser: User): void {
    this.users = this.users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
  }

  updateCurrentUser(updatedCurrentUser: User): void {
    this.currentUserSubject.next(updatedCurrentUser);
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
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/signin');
  }

  deleteAccount(): void {
    this.users = this.users.filter(
      (user) => user.email !== this.currentUserSubject.value?.email
    );

    this.logOut();
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
