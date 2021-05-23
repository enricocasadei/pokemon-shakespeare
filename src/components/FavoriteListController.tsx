import React from 'react';

import { useStorage } from './FavoriteProvider';
import { CardBody, CardHeader, CardWrapper } from './UI/Card';
import { Col, Grid, Row } from './UI/Layout';
import { Text } from './UI/Text';

export function FavoriteListController() {
  const { store } = useStorage();
  const pokemons = store[0];
  return (
    <Grid>
      <Row>
        <Col>
          <CardWrapper>
            <CardHeader>
              <Text weight="bold" size={1.5}>List of favorite pokemon</Text>
            </CardHeader>

            <CardBody>
              {pokemons === null || pokemons.length === 0 ? (
                <Text size={1}>There are no pokemon selected</Text>
              ) : (
                <Grid>
                  {pokemons.map((pokemon) => (
                    <Row
                      key={`pokemon-key-${pokemon.name}`}
                      gap="large"
                      pad="medium"
                    >
                      <Col width="100%" align="center">
                        <Text>{pokemon.name}</Text>
                      </Col>
                    </Row>
                  ))}
                </Grid>
              )}
            </CardBody>
          </CardWrapper>
        </Col>
      </Row>
    </Grid>
  );
}
