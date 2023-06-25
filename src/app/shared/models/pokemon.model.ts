export interface Pokemon {
  id: number;
  name: string;
  imgSrc: string;
  description: string;
  types: string[];
  height: number;
  weight: number;
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: string[];
}
