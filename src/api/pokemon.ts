import { GenericError, NetworkError } from '../type/errors';
import { Pokemon } from '../type/pokemon';

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon-species";

export function getPokemonUrl(name: string) {
  return `${POKEMON_URL}/${name}/`;
}

export async function getPokemon(
  name: string,
  signal: AbortSignal
): Promise<Pokemon> {
  const response = await fetch(getPokemonUrl(name), { signal });

  if (response.ok) {
    return await response.json();
  }

  if (response.status === 404) {
    throw new GenericError("Pokemon not found");
  }

  throw new NetworkError("getPokemon failed");
}
