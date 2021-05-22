import React, { useState } from 'react';

import { cleanString } from '../helpers/utils';
import { Col, Grid, Row } from './Grid';
import { ResultsBox } from './ResultsBox';
import { SearchBox } from './SearchBox';

export function SearchController() {
  const [pokemon, setPokemon] = useState<string>("");
  return (
    <Grid>
      <Row gap="large">
        <Col width="100%" align="center">
          <SearchBox value={pokemon} onChange={setPokemon} />
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
