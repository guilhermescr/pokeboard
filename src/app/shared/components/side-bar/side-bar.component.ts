import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  isSideBarOpen: boolean = false;
  @Input() currentRoute!: string;

  constructor(private authService: AuthService, private router: Router) {}

  openSideBar(): void {
    this.isSideBarOpen = true;
  }

  closeSideBar(): void {
    this.isSideBarOpen = false;
  }

  logout(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/signin');
  }
}
