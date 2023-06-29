import { PokeapiService } from 'src/app/shared/services/pokeapi.service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
import { PokemonForTeams } from 'src/app/shared/models/pokemonForTeams.model';
import { PokemonItem } from 'src/app/shared/models/pokemonItem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user!: User;
  profilePicture: string = '';
  pokemonTeam: PokemonForTeams[] = [];
  nearbyPokemons: {
    name: string;
    imgSrc: string;
    distance: number;
  }[] = [];
  pokemonItems: PokemonItem[] = [];
  amountOfPokemonInTeam: number = 6;
  amountOfItems: number = 4;

  constructor(
    private authService: AuthService,
    private pokeApiService: PokeapiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((currentUser) => {
      this.user = currentUser!;
    });

    this.profilePicture =
      this.user.currentProfilePicture === 'Ash'
        ? '../../../assets/img/ash-ketchum.webp'
        : '../../../assets/img/serena.webp';

    this.getPokemonTeam();
    this.getNearbyPokemonList();
    this.getItems();
  }

  getPokemonTeam(): void {
    let index = 0;

    while (index < this.amountOfPokemonInTeam) {
      this.getPokemonForTheTeam();
      index++;
    }
  }

  getPokemonForTheTeam(): void {
    const randomPokemonId = String(Math.ceil(Math.random() * 649));

    this.pokeApiService.getPokemon(randomPokemonId).subscribe((pokemon) => {
      const pokemonTypes: string[] = pokemon.types.map(
        (typesObject: any) => typesObject.type.name
      );

      const getPokemonStat: (statName: string) => number = (
        statName: string
      ) => {
        const statObject = pokemon.stats.find(
          (stat: any) => stat.stat.name === statName
        );

        return statObject.base_stat;
      };

      const pokemonStats = {
        hp: getPokemonStat('hp'),
        attack: getPokemonStat('attack'),
        defense: getPokemonStat('defense'),
      };

      const pokemonData: PokemonForTeams = {
        name: pokemon.name.replaceAll('-', ' '),
        imgSrc:
          pokemon.sprites.versions['generation-v']['black-white'].animated
            .front_default,
        types: pokemonTypes,
        stats: pokemonStats,
      };

      this.pokemonTeam.push(pokemonData);
    });
  }

  getNearbyPokemonList(): void {
    this.getNearbyPokemon();
    this.getNearbyPokemon();
  }

  getNearbyPokemon(): void {
    const randomPokemonId = String(Math.ceil(Math.random() * 649));

    this.pokeApiService.getPokemon(randomPokemonId).subscribe((pokemon) => {
      const nearbyPokemon = {
        name: pokemon.name.replaceAll('-', ' ') as string,
        imgSrc: pokemon.sprites.versions['generation-v']['black-white'].animated
          .front_default as string,
        distance: Math.ceil(Math.random() * 100),
      };
      this.nearbyPokemons.push(nearbyPokemon);
    });
  }

  getItems(): void {
    let index = 1;

    while (index <= this.amountOfItems) {
      const itemId = Math.ceil(Math.random() * 500);

      this.pokeApiService.getPokemonItem(String(itemId)).subscribe((item) => {
        const pokemonItem: PokemonItem = {
          name: item.name.replaceAll('-', ' '),
          imgSrc: item.sprites.default,
          quantity: Math.ceil(Math.random() * 64),
        };
        this.pokemonItems.push(pokemonItem);
      });
      index++;
    }
  }

  navigateToMyProfileRoute(): void {
    this.router.navigateByUrl('/board/my-profile');
  }
}
