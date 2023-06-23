import { Pokemon } from './pokemon.model';

export interface User {
  id?: string;
  name?: string;
  email: string;
  password: string;
  favoritePokemonList: Pokemon[];
}
