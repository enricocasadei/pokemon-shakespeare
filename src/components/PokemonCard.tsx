import React from 'react';

import { stripHtml } from '../helpers/utils';
import { PokemonSaved } from '../type/pokemon';
import { useStorage } from './FavoritePokemonStorageProvider';
import { CardBody, CardButton, CardFooter, CardHeader, CardWrapper } from './UI/Card';
import { Text } from './UI/Text';

export function PokemonCard(props: PokemonSaved) {
  const { store, addPokemon, removePokemon } = useStorage();
  const isPokemonPresent = store[0]?.find(
    (pokemon) => pokemon.name === props.name
  );
  return (
    <CardWrapper>
      <CardHeader>
        <Text size={1.75} weight="bold" align="center">
          Shakespeare says of{" "}
          <Text transform="capitalize" size={1.75} weight="bold">
            {props.name}
          </Text>
        </Text>
      </CardHeader>
      <CardBody>
        <div>
          {props.text.split("\\n").map((line, index) => (
            <p key={`line-${index}`}>{stripHtml(line)}</p>
          ))}
        </div>
      </CardBody>
      <CardFooter>
        {isPokemonPresent ? (
          <CardButton
            onClick={() => {
              removePokemon(props);
            }}
          >
            Remove from Favorite
          </CardButton>
        ) : (
          <CardButton
            onClick={() => {
              addPokemon(props);
            }}
          >
            Add to Favorite
          </CardButton>
        )}
      </CardFooter>
    </CardWrapper>
  );
}
