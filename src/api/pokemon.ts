import { GenericError, NetworkError } from '../type/errors';
import { Pokemon, PokemonListReturn, PokemonSaved } from '../type/pokemon';
import { fakeShake } from './shakespeare';

const BASE_POKEMON_URL = "https://pokeapi.co/api/v2";

export function getPokemonUrl(name: string) {
  return `${BASE_POKEMON_URL}/pokemon-species/${name}/`;
}

export function getOriginalPokemonListUrl() {
  return `${BASE_POKEMON_URL}/pokemon?limit=151`;
}

export async function getTranslation(
  name: string,
  signal: AbortSignal
): Promise<PokemonSaved> {
  const response = await fetch(getPokemonUrl(name), { signal });

  if (response.ok) {
    const data = (await response.json()) as Pokemon;
    const text = data.flavor_text_entries.find(
      (text) => text.language.name === "en"
    );
    if (text && text.flavor_text) {
      const shakespeareResponse = await fakeShake(text.flavor_text, signal);
      return {
        name,
        id: data.id,
        text: shakespeareResponse,
      };
    } else {
      throw new GenericError("Pokemon description to translate not found");
    }
  }

  if (response.status === 404) {
    throw new GenericError("Pokemon not found");
  }

  throw new NetworkError("Translation is not possible right now, try later");
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

  throw new NetworkError("It is not possible to retrieve the list of pokemon");
}
