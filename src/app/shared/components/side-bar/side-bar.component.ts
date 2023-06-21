import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  isSideBarOpen: boolean = false;

  constructor(private authService: AuthService) {}

  openSideBar(): void {
    this.isSideBarOpen = true;
  }

  closeSideBar(): void {
    this.isSideBarOpen = false;
  }

  logout(): void {
    this.authService.logOut();
  }
}
