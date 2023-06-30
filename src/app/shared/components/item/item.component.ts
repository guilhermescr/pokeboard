import { Component, Input } from '@angular/core';
import { PokemonItem } from '../../models/pokemonItem.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item!: PokemonItem;
}
