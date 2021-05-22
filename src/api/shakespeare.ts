const SHAKESPEARE_URL = "https://pokeapi.co/api/v2/pokemon-species";

export function getShakespeareUrl(name: string) {
  return `${SHAKESPEARE_URL}/${name}/`;
}
