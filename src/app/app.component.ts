import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isUserAuthenticated: boolean =
    this.authService.fetchCurrentUserSubject() !== null;
  currentRoute: string = '/board';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe((currentUserData) => {
      this.isUserAuthenticated = currentUserData !== null;
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((routerChange) => {
      if (routerChange instanceof NavigationEnd) {
        this.currentRoute = routerChange.url;
      }
    });
  }
}
