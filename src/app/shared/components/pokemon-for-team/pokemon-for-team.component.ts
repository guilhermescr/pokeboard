import { Component, Input } from '@angular/core';
import { PokemonForTeams } from '../../models/pokemonForTeams.model';

@Component({
  selector: 'app-pokemon-for-team',
  templateUrl: './pokemon-for-team.component.html',
  styleUrls: ['./pokemon-for-team.component.scss'],
})
export class PokemonForTeamComponent {
  @Input() pokemonForTeam!: PokemonForTeams;
}
