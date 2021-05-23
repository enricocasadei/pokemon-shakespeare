import React, { useState } from 'react';

import { cleanString } from '../helpers/utils';
import { FavoriteListController } from './FavoriteListController';
import { PokemonCard } from './PokemonCard';
import { ResultsBox } from './ResultsBox';
import { InputWithAutoComplete } from './UI/InputWithAutoComplete';
import { Col, Grid, Row } from './UI/Layout';
import { Text } from './UI/Text';

export function Controller() {
  const [currentPokemon, setCurrentPokemon] = useState<string>("");
  return (
    <Grid>
      <Row gap="small" justify="center">
        <Col width="100%">
          <Grid>
            <Row gap="medium" pad="medium">
              <Col width="100%" align="center">
                <Text size={1.25}>
                  What if the description of each of the original 151 pokemon
                  were to be written using Shakespeare's style?
                  <br />
                  And in addition you can select a list of favorite too?!
                  <br />
                  Super COOL!
                </Text>
              </Col>
              <Col width="100%">
                <InputWithAutoComplete
                  value={currentPokemon}
                  onChange={(value?: string) => setCurrentPokemon(value || "")}
                />
              </Col>
            </Row>
          </Grid>
        </Col>
        <Col>
          {currentPokemon ? (
            <ResultsBox pokemon={cleanString(currentPokemon)} />
          ) : (
            <PokemonCard disabled={true} />
          )}
        </Col>
        <Col>
          <FavoriteListController />
        </Col>
      </Row>
    </Grid>
  );
}
