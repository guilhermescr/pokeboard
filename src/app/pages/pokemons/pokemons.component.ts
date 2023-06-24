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
  // clear this variable below
  pokemonIdentifier: string = 'bulbasaur';
  pokemonQuantity: number = 1;
  pokemonNotFound: boolean = false;
  isInvalidQuantity: boolean = false;
  hasSearched: boolean = false;
  pokemonList: Pokemon[] = [];

  pagedPokemonList: Pokemon[] = [];
  pages: number = 0;
  currentPage: number = 1;
  pageLimit: number = 20;

  constructor(private pokeApiService: PokeapiService) {}

  // remove this ngOnInit()
  ngOnInit(): void {
    this.getPokemonByIdentifier();
  }

  getAmountOfPages(): void {
    this.pages = Math.ceil(this.pokemonQuantity / this.pageLimit);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updatePagedCards();
  }

  updatePagedCards() {
    const startIndex = (this.currentPage - 1) * this.pageLimit;
    const endIndex = startIndex + this.pageLimit;
    this.pagedPokemonList = this.pokemonList.slice(startIndex, endIndex);
  }

  clearPokemonList(): void {
    this.pokemonList = [];
    this.pagedPokemonList = [];
  }

  handleSelectChange(): void {
    this.clearPokemonList();

    this.pokemonIdentifier = '';
    this.pokemonQuantity = 1;
    [this.pokemonNotFound, this.isInvalidQuantity, this.hasSearched] = [
      false,
      false,
      false,
    ];
  }

  handleChange(): void {
    [this.hasSearched, this.pokemonNotFound, this.isInvalidQuantity] = [
      false,
      false,
      false,
    ];
    this.clearPokemonList();
  }

  getPokemonByIdentifier(): void {
    this.pokemonIdentifier = this.pokemonIdentifier
      .split('')
      .map((character) => {
        return /^[A-Za-z0-9]*$/.test(character) ? character : '';
      })
      .join('')
      .toLowerCase();

    const isPokemonInPokemonList =
      this.pokemonList.find(
        ({ name, id }) =>
          name === this.pokemonIdentifier ||
          String(id) === this.pokemonIdentifier
      ) !== undefined;

    if (isPokemonInPokemonList || !this.pokemonIdentifier.length) return;

    this.hasSearched = true;

    this.pokeApiService.getPokemon(this.pokemonIdentifier).subscribe({
      next: (pokemonData) => {
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

  handlePokemonQuantity() {
    this.isInvalidQuantity = this.pokemonQuantity === null;

    if (this.hasSearched || this.isInvalidQuantity) return;

    if (!this.pokemonQuantity || this.pokemonQuantity < 0) {
      this.pokemonQuantity = 1;
    }

    if (this.pokemonQuantity > this.pokeApiService.maxAmountOfRequests) {
      this.pokemonQuantity = this.pokeApiService.maxAmountOfRequests;
    }

    this.getPokemonByQuantity();
  }

  getPokemonByQuantity(): void {
    this.hasSearched = true;

    let pokemonId = 1;

    while (pokemonId <= this.pokemonQuantity) {
      this.pokeApiService
        .getPokemon(String(pokemonId))
        .subscribe((pokemonData) => {
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
        });

      pokemonId++;
    }

    this.getAmountOfPages();
  }
}
