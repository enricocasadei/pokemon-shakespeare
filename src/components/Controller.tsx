import React, { useState } from "react";
import styled from "styled-components";

import { MediaQuery, Spacing } from "../helpers/style";
import { cleanString } from "../helpers/utils";
import { FavoriteList } from "./FavoriteList";
import { IntroductoryText } from "./IntroductoryText";
import { PokemonCard } from "./PokemonCard";
import { PokemonInput } from "./PokemonInput";
import { ResultsBox } from "./ResultsBox";
import { Container, Section } from "./UI/Layout";

/**
 * Main component to manage the state of the application between the children components
 * it implements a simple grid in order to be responsive
 * */
export function Controller() {
  const [currentPokemon, setCurrentPokemon] = useState<string>();
  return (
    <Container>
      <Section align="center">
        <IntroductoryText />
        <PokemonInput
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
  grid-gap: ${Spacing.large};

  @media all and (max-width: ${MediaQuery.medium}) {
    grid-template-columns: 1fr;
  }
`;
