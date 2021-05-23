export type Pokemon = {
  id: number;
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
    };
  }[];
};

export type PokemonListReturn = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type PokemonSaved = {
  id: number;
  name: string;
  text: string;
};
