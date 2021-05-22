import React from 'react';

import { getPokemon } from '../api/pokemon';
import { useFetch } from '../hooks/useFetch';
import { Spinner } from './Spinner';

export function ResultsBox(props: { pokemon: string }) {
  const response = useFetch(
    (signal: AbortSignal) => getPokemon(props.pokemon, signal),
    [props.pokemon]
  );

  if (!response.data && !response.error) {
    return <Spinner />;
  }

  if (response.error && response.data === undefined) {
    return <div>{response.error.message}</div>;
  }

  return <div>{JSON.stringify(response.data)}</div>;
}
