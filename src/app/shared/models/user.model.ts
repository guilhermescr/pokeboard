import { Pokemon } from './pokemon.model';

export interface User {
  id?: string;
  name?: string;
  currentProfilePicture?: string;
  email: string;
  password: string;
  address?: string;
  favoritePokemonList: Pokemon[];
  links?: {
    website: {
      url: string;
      placeholder: string;
    };
    github: {
      url: string;
      placeholder: string;
    };
    linkedin: {
      url: string;
      placeholder: string;
    };
    instagram: {
      url: string;
      placeholder: string;
    };
    youtube: {
      url: string;
      placeholder: string;
    };
  };
}
