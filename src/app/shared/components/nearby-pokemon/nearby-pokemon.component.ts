import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nearby-pokemon',
  templateUrl: './nearby-pokemon.component.html',
  styleUrls: ['./nearby-pokemon.component.scss'],
})
export class NearbyPokemonComponent {
  @Input() pokemon!: {
    name: string;
    imgSrc: string;
    distance: number;
  };
}
