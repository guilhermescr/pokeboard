import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(this.fetchCurrentUserSubject());
  public currentUser: Observable<User | null> =
    this.currentUserSubject.asObservable();

  users: User[] = this.fetchUsers();

  /*
  Sample User:
  import { v4 as uuidv4 } from 'uuid';

  private adminUserId: string = uuidv4();
  {
    id: this.adminUserId,
    name: 'admin',
    currentProfilePicture: 'Ash',
    email: 'admin@admin.com',
    password: 'admin2023',
    favoritePokemonList: [],
  },
  */

  constructor(private router: Router, private toastr: ToastrService) {
    this.currentUser.subscribe((currentUserData) => {
      if (currentUserData) {
        this.updateUsers(currentUserData);
      }
    });
  }

  registerNewUser(user: User): void {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  updateUsers(updatedUser: User): void {
    this.users = this.users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  updateCurrentUser(updatedCurrentUser: User): void {
    localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUser));
    this.currentUserSubject.next(updatedCurrentUser);
  }

  logIn({ email }: User): void {
    const userData = this.getAllDataAboutUser(email);

    if (userData) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
      this.currentUserSubject.next(userData);
      this.router.navigateByUrl('/board');

      this.toastr.success('Welcome to the PokéBoard!', "You're in!");
    }
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  deleteAccount(): void {
    this.users = this.users.filter(
      (user) => user.id !== this.currentUserSubject.value?.id
    );
    localStorage.setItem('users', JSON.stringify(this.users));

    this.logOut();
    this.router.navigateByUrl('/signin');
    this.toastr.success('Account deleted permanently!', 'Account deleted');
  }

  isNewDataAvailable(isName: boolean, newData: string): boolean {
    const usersWithoutCurrentUser = this.users.filter(
      (user) => user.id !== this.currentUserSubject.value?.id
    );

    if (
      this.getCurrentUser()?.name === newData ||
      this.getCurrentUser()?.email === newData
    ) {
      return true;
    } else if (isName) {
      return (
        usersWithoutCurrentUser.find((user) => user.name === newData) ===
        undefined
      );
    } else {
      return (
        usersWithoutCurrentUser.find((user) => user.email === newData) ===
        undefined
      );
    }
  }

  isNewAccount(user: User, checkOnlyEmail: boolean): boolean {
    if (checkOnlyEmail) {
      return (
        this.users.find(($user) => $user.email === user.email) === undefined
      );
    } else {
      return (
        this.users.find(
          ($user) => $user.name === user.name || $user.email === user.email
        ) === undefined
      );
    }
    // isUndefined ? 'It is a new account' : 'It is not';
  }

  areEmailAndPasswordCorrect(user: User): boolean {
    return (
      this.users.find(
        ($user) =>
          $user.email === user.email && $user.password === user.password
      ) !== undefined
    );
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

  fetchUsers(): User[] {
    const users = localStorage.getItem('users');

    if (users) {
      return JSON.parse(users);
    }
    return [];
  }

  fetchCurrentUserSubject(): User | null {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      return JSON.parse(currentUser);
    }
    return null;
  }
}
