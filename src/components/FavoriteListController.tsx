import React from 'react';

import { useStorage } from './FavoriteProvider';
import { CardBody, CardHeader, CardWrapper } from './UI/Card';
import { Text } from './UI/Text';

export function FavoriteListController() {
  const { store } = useStorage();
  const pokemons = store[0];
  return (
    <CardWrapper>
      <CardHeader>
        <Text weight="bold" size={1.5}>
          List of favorite pokemon
        </Text>
      </CardHeader>

      <CardBody>
        {pokemons === null || pokemons.length === 0 ? (
          <Text size={1}>There are no pokemon selected</Text>
        ) : (
          <ul>
            {pokemons.map((pokemon) => (
              <li key={`pokemon-key-${pokemon.name}`}>
                <Text>{pokemon.name}</Text>
              </li>
            ))}
          </ul>
        )}
      </CardBody>
    </CardWrapper>
  );
}
