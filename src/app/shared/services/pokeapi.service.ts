import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';
  maxAmountOfRequests: number = 1010;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getPokemon(pokemonIdentifier: string): Observable<any> {
    return this.http.get(`${this.pokeApiUrl}/${pokemonIdentifier}`);
  }

  isPokemonInFavoriteList(pokemon: Pokemon): boolean {
    const currentUser = this.authService.getCurrentUser()!;

    return (
      currentUser.favoritePokemonList.find(
        (favoritePokemon) => favoritePokemon.name === pokemon.name
      ) !== undefined
    );
  }

  getFavoritePokemonList(): Pokemon[] {
    const currentUser = this.authService.getCurrentUser()!;

    return currentUser.favoritePokemonList;
  }

  savePokemonInFavoriteList(pokemon: Pokemon): void {
    if (this.isPokemonInFavoriteList(pokemon)) return;

    const currentUser = this.authService.getCurrentUser()!;

    this.authService.updateCurrentUser({
      ...currentUser,
      favoritePokemonList: [...currentUser.favoritePokemonList, pokemon],
    });
  }

  removePokemonFromFavoriteList(pokemon: Pokemon): void {
    const currentUser = this.authService.getCurrentUser()!;

    const favoritePokemonList = currentUser.favoritePokemonList.filter(
      (favoritePokemon) => favoritePokemon.name !== pokemon.name
    );

    this.authService.updateCurrentUser({
      ...currentUser,
      favoritePokemonList,
    });
  }
}
