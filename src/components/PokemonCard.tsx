import React from 'react';

import { colors } from '../helpers/style';
import { stripHtml } from '../helpers/utils';
import { PokemonSaved } from '../type/pokemon';
import { useStorage } from './FavoriteProvider';
import { CardBody, CardButton, CardFooter, CardHeader, CardWrapper } from './UI/Card';
import { Text } from './UI/Text';

type PokemonCardProps =
  | {
      disabled: true;
    }
  | ({
      disabled?: false;
    } & PokemonSaved);

export function PokemonCard(props: PokemonCardProps) {
  const { store, addPokemon, removePokemon } = useStorage();

  if (props.disabled === true) {
    return (
      <CardWrapper>
        <CardHeader>
          <Text
            size={1.5}
            weight="bold"
            align="center"
            color={colors.disabled}
          >
            Shakespeare knows nothing
          </Text>
        </CardHeader>
        <CardBody>
          <Text size={1} color={colors.disabled}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </CardBody>
        <CardFooter>
          <CardButton disabled>Add to Favorite</CardButton>
        </CardFooter>
      </CardWrapper>
    );
  }

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
