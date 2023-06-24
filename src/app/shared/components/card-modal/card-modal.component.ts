import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent {
  @Output() closeModalEvent = new EventEmitter();

  fireCloseModalEvent(): void {
    this.closeModalEvent.emit();
  }
}
