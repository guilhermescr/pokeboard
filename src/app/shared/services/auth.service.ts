import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private adminUserId: string = uuidv4();
  private currentUserSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> =
    this.currentUserSubject.asObservable();

  users: User[] = [
    {
      id: this.adminUserId,
      name: 'admin',
      currentProfilePicture: 'Ash',
      email: 'admin@admin.com',
      password: 'admin2023',
      favoritePokemonList: [],
    },
    {
      id: uuidv4(),
      name: 'Carlos Gabriel',
      currentProfilePicture: 'Ash',
      email: 'cacagabi@gmail.com',
      password: 'cacagabi2023',
      favoritePokemonList: [],
    },
    {
      id: uuidv4(),
      name: 'Treinadora Do Mato',
      currentProfilePicture: 'Serena',
      email: 'treinadoradomato@gmail.com',
      password: 'treinadora2023',
      favoritePokemonList: [],
    },
  ];

  constructor(private router: Router, private toastr: ToastrService) {
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

      this.toastr.success('Welcome to the PokéBoard!', "You're in!");
    }
  }

  logOut(): void {
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/signin');
  }

  deleteAccount(): void {
    this.users = this.users.filter(
      (user) => user.id !== this.currentUserSubject.value?.id
    );

    this.logOut();
    this.toastr.success('Account deleted permanently', 'Account deleted');
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
