import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input() userData!: User;
  ashKetchumProfilePicture: string = '../../../assets/img/ash-ketchum.webp';
  serenaProfilePicture: string = '../../../assets/img/serena.webp';
  currentProfilePicture: string = 'Ash';
  isPopupOpen: boolean = false;
  deleteMessage: string = 'to delete your account permanently';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentProfilePicture = this.userData.currentProfilePicture!;
  }

  toggleCurrentProfilePicture(): void {
    this.currentProfilePicture =
      this.currentProfilePicture === 'Ash' ? 'Serena' : 'Ash';

    this.authService.updateCurrentUser({
      ...this.userData,
      currentProfilePicture: this.currentProfilePicture,
    });
  }

  openConfirmPopup(): void {
    this.isPopupOpen = true;
  }

  closeConfirmPopup(): void {
    this.isPopupOpen = false;
  }
}
