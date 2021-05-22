const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon-species";

export function getPokemonUrl(name: string) {
  return `${POKEMON_URL}/${name}/`;
}
