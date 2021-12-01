import React from "react";

import { getTranslation } from "../api/pokemon";
import { useFetch } from "../hooks/useFetch";
import { PokemonCard } from "./PokemonCard";
import { ErrorText } from "./UI/ErrorText";
import { Spinner } from "./UI/Spinner";

/**
 * controller for retrieving the translation, manage the loading and the error
 * */
export function ResultsBox(props: { pokemon: string }) {
  const { data, error } = useFetch(
    (signal: AbortSignal) => getTranslation(props.pokemon, signal),
    [props.pokemon]
  );

  if (!data) {
    return error ? <ErrorText>{error.message}</ErrorText> : <Spinner />;
  } else {
    return <PokemonCard {...data} />;
  }
}
