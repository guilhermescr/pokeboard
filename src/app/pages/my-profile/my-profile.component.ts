import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
  user: User = this.authService.getCurrentUser()!;
  isUserLinksCrudOpen: boolean = false;
  isUserDataCrudOpen: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((currentUserData) => {
      this.user = currentUserData!;
    });
  }

  openUserLinksCrud(): void {
    this.isUserLinksCrudOpen = true;
  }

  closeUserLinksCrud(): void {
    this.isUserLinksCrudOpen = false;
  }
}
