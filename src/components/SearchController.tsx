import React, { useState } from 'react';

import { cleanString } from '../helpers/utils';
import { AutoComplete } from './AutoComplete';
import { Col, Grid, Row } from './Grid';
import { ResultsBox } from './ResultsBox';

export function SearchController() {
  const [pokemon, setPokemon] = useState<string>("");
  return (
    <Grid>
      <Row gap="large">
        <Col width="100%" align="center">
          <AutoComplete
            value={pokemon}
            onChange={(value?: string) => setPokemon(value || "")}
          />
        </Col>
        <Col width="100%" align="center">
          {pokemon && pokemon.length > 3 ? (
            <ResultsBox pokemon={cleanString(pokemon)} />
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Grid>
  );
}
