import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isUserAuthenticated: boolean = true;
  currentRoute: string = '/board';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((currentUserData) => {
      this.isUserAuthenticated = currentUserData !== null;
    });

    this.router.events.subscribe((routerChange) => {
      if (routerChange instanceof NavigationEnd) {
        this.currentRoute = routerChange.url;
      }
    });
  }
}
