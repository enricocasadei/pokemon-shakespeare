import React, { useState } from 'react';

import { cleanString } from '../helpers/utils';
import { AutoComplete } from './AutoComplete';
import { Col, Container, Grid, Row, Section } from './Layout';
import { ResultsBox } from './ResultsBox';
import { Text } from './Text';

export function SearchController() {
  const [pokemon, setPokemon] = useState<string>("");
  return (
    <Container>
      <Section>
        <Grid>
          <Row gap="large">
            <Col width="100%" align="center">
              <Text size={1.25} align="center">
                What if the description of each of the original 151 pokemon
                <br />
                were to be written using Shakespeare's style?
                <br />
                And in addition you can select a list of favorite too?!
                <br />
                Super COOL!
              </Text>
            </Col>
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
      </Section>
    </Container>
  );
}
