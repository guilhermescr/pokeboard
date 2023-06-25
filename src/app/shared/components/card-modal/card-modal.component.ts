import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent {
  @Output() closeModalEvent = new EventEmitter();
  @Input() pokemonData!: Pokemon;

  fireCloseModalEvent(): void {
    this.closeModalEvent.emit();
  }

  formatPokemonId(pokemonId: number): string {
    if (pokemonId < 10) {
      return `#00${pokemonId}`;
    } else if (pokemonId < 100) {
      return `#0${pokemonId}`;
    } else {
      return `#${pokemonId}`;
    }
  }
}
