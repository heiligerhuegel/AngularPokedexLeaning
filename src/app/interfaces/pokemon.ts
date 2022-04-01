export interface Pokemon {
  abilities: {}[];
  base_experience: number;
  forms: {}[];
  game_indices: {}[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {}[];
  name: string;
  order: number;
  past_types: [];
  species: { name: string; url: string };
  sprites: { front_default: string };
  stats: {}[];
  types: { slot: number; type: { name: string; url: string } }[];
  weight: number;
}
