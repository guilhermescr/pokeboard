import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input() userData!: User;
  ashKetchumProfilePicture: string = '../../../assets/img/ash-ketchum.webp';
  serenaProfilePicture: string = '../../../assets/img/serena.webp';
  isAshProfilePicture: boolean = true;

  toggleCurrentProfilePicture(): void {
    this.isAshProfilePicture = !this.isAshProfilePicture;
  }
}
