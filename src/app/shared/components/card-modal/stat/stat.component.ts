import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent {
  @Input() statValue!: number;
  @Input() pokemonType!: string;
}
