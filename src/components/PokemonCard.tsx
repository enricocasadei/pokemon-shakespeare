import React from 'react';

import { colors } from '../helpers/style';
import { stripHtml } from '../helpers/utils';
import { PokemonSaved } from '../type/pokemon';
import { useStorage } from './FavoritesProvider';
import { CardBody, CardButton, CardFooter, CardHeader, CardWrapper } from './UI/Card';
import { Text } from './UI/Text';

type PokemonCardProps =
  | {
      disabled: true;
    }
  | ({
      disabled?: false;
    } & PokemonSaved);

/**
 * simply a card for show the power of shakespeare with a pokemon combined!
 * */
export function PokemonCard(props: PokemonCardProps) {
  const { store, addPokemon, removePokemon } = useStorage();

  if (props.disabled === true) {
    return <EmptyCard />;
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
            Remove from Favorites
          </CardButton>
        ) : (
          <CardButton
            onClick={() => {
              addPokemon(props);
            }}
          >
            Add to Favorites
          </CardButton>
        )}
      </CardFooter>
    </CardWrapper>
  );
}

/**
 * Dump component to joke and show a skeleton in case no pokemon is selected... Nothing is better than a Shakespeare's quote!
 * */
function EmptyCard() {
  return (
    <CardWrapper>
      <CardHeader>
        <Text size={1.5} weight="bold" align="center" color={colors.disabled}>
          Shakespeare knows nothing
        </Text>
      </CardHeader>
      <CardBody>
        <Text size={1} color={colors.disabled}>
          "What a piece of work is a man! How noble in reason, how infinite in
          faculty! In form and moving how express and admirable! In action how
          like an Angel! in apprehension how like a god! The beauty of the
          world! The paragon of animals! And yet to me, what is this
          quintessence of dust? Man delights not me; no, nor Woman neither;
          though by your smiling you seem to say so.."
        </Text>
        <br />
        <br />
        <Text size={0.75} color={colors.disabled}>
          (Hamlet, act 2 scene 2)
        </Text>
      </CardBody>
      <CardFooter>
        <CardButton disabled>Add to Favorite</CardButton>
      </CardFooter>
    </CardWrapper>
  );
}
