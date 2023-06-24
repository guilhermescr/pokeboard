import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss'],
})
export class PaginationControlsComponent {
  @Output() pageChangeEvent = new EventEmitter<number>();

  firePageChangeEvent(pageNumber: number): void {
    this.pageChangeEvent.emit(pageNumber);
  }
}
