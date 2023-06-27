import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.scss'],
})
export class UserLinksComponent {
  @Output() openUserLinksCrudEvent = new EventEmitter();
  @Input() userData!: User;

  fireOpenUserLinksCrudEvent(): void {
    this.openUserLinksCrudEvent.emit();
  }
}
