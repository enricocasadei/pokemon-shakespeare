import React, { useState } from 'react';

import { Col, Grid, Row } from './Grid';
import { SearchBox } from './SearchBox';

export function Controller() {
  const [pokemon, setPokemon] = useState<string>("");
  return (
    <Grid>
      <Row gap="large">
        <Col align="center">
          <SearchBox value={pokemon} onChange={setPokemon} />
        </Col>
        <Col width="100%">[results]</Col>
        <Col width="100%">[favs]</Col>
      </Row>
    </Grid>
  );
}
