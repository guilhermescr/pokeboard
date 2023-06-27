import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent {
  @Input() userData!: User;
  isPasswordVisible: boolean = false;

  showPassword(): void {
    this.isPasswordVisible = true;
  }

  hidePassword(): void {
    this.isPasswordVisible = false;
  }

  getPasswordHiddenCharacters(): string {
    const passwordLength = this.userData.password.split('').length;
    let passwordHiddenCharacters = '';
    let index = 0;

    while (index < passwordLength) {
      passwordHiddenCharacters += '*';

      index++;
    }

    return passwordHiddenCharacters;
  }
}
