import React, { createContext, useCallback, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { PokemonSaved } from "../type/pokemon";

const KEY_STORAGE = "pokemon-favorite-list";

type StorageContextType = [
  PokemonSaved[] | null,
  (value: PokemonSaved[]) => void
];

const StorageContext = createContext<StorageContextType>([null, () => {}]);

/**
 * This is the provider for the local storage used in order to save the list of favorite
 * */
export function FavoritesProvider(props: {
  children: JSX.Element[] | JSX.Element;
}) {
  const storage = useLocalStorage<PokemonSaved[]>(KEY_STORAGE);

  return (
    <StorageContext.Provider value={storage}>
      {props.children}
    </StorageContext.Provider>
  );
}

/**
 * This is a hook created to use the context for the list of favorite
 * and to enrich it with single add and remove pokemon functionality
 * */
export function useStorage(): {
  store: StorageContextType;
  addPokemon: (newPokemon: PokemonSaved) => void;
  removePokemon: (newPokemon: PokemonSaved) => void;
} {
  const [store, setValue] = useContext(StorageContext);

  const addPokemon = useCallback(
    (newPokemon: PokemonSaved) => {
      const newList = store ? [...store, newPokemon] : [newPokemon];

      setValue([...newList]);
    },
    [store]
  );

  const removePokemon = useCallback(
    (newPokemon: PokemonSaved) => {
      const newList =
        store?.filter((pokemon) => pokemon.name !== newPokemon.name) || [];

      setValue([...newList]);
    },
    [store]
  );

  return { store: [store, setValue], addPokemon, removePokemon };
}
