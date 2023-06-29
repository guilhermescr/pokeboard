export interface PokemonForTeams {
  name: string;
  imgSrc: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
  };
}
