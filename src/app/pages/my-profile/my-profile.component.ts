import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
  user: User;
  isPasswordVisible: boolean = false;

  constructor(private authService: AuthService) {
    this.user = this.authService.getCurrentUser()!;
  }

  showPassword(): void {
    this.isPasswordVisible = true;
  }

  hidePassword(): void {
    this.isPasswordVisible = false;
  }

  getPasswordHiddenCharacters(): string {
    const passwordLength = this.user.password.split('').length;
    let passwordHiddenCharacters = '';
    let index = 0;

    while (index < passwordLength) {
      passwordHiddenCharacters += '*';

      index++;
    }

    return passwordHiddenCharacters;
  }
}
