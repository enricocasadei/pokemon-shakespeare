import React from 'react';

import { getOriginalPokemonList } from '../api/pokemon';
import { useFetch } from '../hooks/useFetch';
import { InputProps } from '../type/input';
import { InputWithAutoComplete } from './UI/InputWithAutoComplete';

/**
 * controller of the InputWithAutoComplete that retrieve the list of the original 151 pokemon
 * */
export function PokemonInput(props: InputProps<string>) {
  const { data = [] } = useFetch(
    (signal: AbortSignal) => getOriginalPokemonList(signal),
    []
  );

  return <InputWithAutoComplete {...props} data={data} />;
}
