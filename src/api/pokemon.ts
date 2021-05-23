import { GenericError, NetworkError } from '../type/errors';
import { Pokemon, PokemonListReturn } from '../type/pokemon';

const BASE_POKEMON_URL = "https://pokeapi.co/api/v2";

export function getPokemonUrl(name: string) {
  return `${BASE_POKEMON_URL}/pokemon-species/${name}/`;
}

export function getOriginalPokemonListUrl() {
  return `${BASE_POKEMON_URL}/pokemon?limit=151`;
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

export async function getOriginalPokemonList(
  signal: AbortSignal
): Promise<string[]> {
  const response = await fetch(getOriginalPokemonListUrl(), { signal });

  if (response.ok) {
    try {
      const data = (await response.json()) as PokemonListReturn;
      return data.results.map((pokemon) => pokemon.name);
    } catch (error) {
      throw new NetworkError("Could not get the list of Pokemon");
    }
  }

  throw new NetworkError("getPokemon failed");
}
