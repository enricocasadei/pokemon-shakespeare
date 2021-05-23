import React, { useState } from 'react';
import styled from 'styled-components';

import { MediaQuery } from '../helpers/style';
import { cleanString } from '../helpers/utils';
import { FavoriteList } from './FavoriteList';
import { PokemonCard } from './PokemonCard';
import { ResultsBox } from './ResultsBox';
import { InputWithAutoComplete } from './UI/InputWithAutoComplete';
import { Container, Section } from './UI/Layout';
import { Text } from './UI/Text';

export function Controller() {
  const [currentPokemon, setCurrentPokemon] = useState<string>("");
  return (
    <Container>
      <Section align="center">
        <Text size={1.25}>
          What if the description of each of the original 151 pokemon were to be
          written using Shakespeare's style?
          <br />
          And in addition you can select a list of favorite too?!
          <br />
          Super COOL!
        </Text>
        <InputWithAutoComplete
          value={currentPokemon}
          onChange={(value?: string) => setCurrentPokemon(value || "")}
        />
      </Section>
      <Section>
        <Grid>
          {currentPokemon ? (
            <ResultsBox pokemon={cleanString(currentPokemon)} />
          ) : (
            <PokemonCard disabled={true} />
          )}
          <FavoriteList />
        </Grid>
      </Section>
    </Container>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 32px;

  @media all and (max-width: ${MediaQuery.m}) {
    grid-template-columns: 1fr;
  }
`;
