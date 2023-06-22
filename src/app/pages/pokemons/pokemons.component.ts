import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  pokeSearchCurrentMode: string = 'Search By Name Mode';
  searchPokemonInput: string = '';
  pokemonNotFound: boolean = false;
  hasSearched: boolean = false;
  pokemonList: Pokemon[] = [];

  constructor(private pokeApiService: PokeapiService) {}

  handleChange(): void {
    this.pokemonList = [];
    [this.hasSearched, this.pokemonNotFound] = [false, false];
  }

  getPokemonByIdentifier(): void {
    this.hasSearched = false;

    if (!this.searchPokemonInput.length) return;

    this.hasSearched = true;

    this.pokeApiService.getPokemon(this.searchPokemonInput).subscribe({
      next: (pokemonData) => {
        const isPokemonInPokemonList =
          this.pokemonList.find(({ name }) => name === pokemonData.name) !==
          undefined;

        if (isPokemonInPokemonList) return;

        const pokemon: Pokemon = {
          id: pokemonData.id,
          name: pokemonData.name,
          imgSrc: pokemonData.sprites.front_default,
          types: pokemonData.types.map(
            (typesObject: any) => typesObject.type.name
          ),
          height: pokemonData.height / 10,
          weight: pokemonData.weight / 10,
          baseStats: {
            hp: pokemonData.stats[0].base_stat,
            attack: pokemonData.stats[1].base_stat,
            defense: pokemonData.stats[2].base_stat,
            specialAttack: pokemonData.stats[3].base_stat,
            specialDefense: pokemonData.stats[4].base_stat,
            speed: pokemonData.stats[5].base_stat,
          },
          abilities: pokemonData.abilities.map(
            (abilitiesObject: any) => abilitiesObject.ability.name
          ),
        };
        this.pokemonList.push(pokemon);

        this.pokemonNotFound = false;
      },
      error: (error) => {
        console.error(error);
        this.pokemonNotFound = true;
      },
    });
  }
}
