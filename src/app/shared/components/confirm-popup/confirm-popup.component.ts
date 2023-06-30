import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
})
export class ConfirmPopupComponent {
  @Output() closeConfirmPopupEvent = new EventEmitter();
  @Output() isUnmarkFavoritePokemonAllowedEvent = new EventEmitter<boolean>();
  @Input() popupMessage!: string;
  @Input() yesMethod!: string;

  constructor(private authService: AuthService, private router: Router) {}

  callYesMethod(): void {
    switch (this.yesMethod) {
      case 'delete':
        this.authService.deleteAccount();
        break;
      case 'logout':
        this.authService.logOut();
        this.router.navigateByUrl('/signin');
        break;
      case 'unmarkPokemonAsFavorite':
        this.isUnmarkFavoritePokemonAllowedEvent.emit();
        this.closeConfirmPopupEvent.emit();
        break;
      default:
        alert('default alert');
    }
  }
}
