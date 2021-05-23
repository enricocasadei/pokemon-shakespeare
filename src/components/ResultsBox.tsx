import React from 'react';

import { getTranslation } from '../api/pokemon';
import { stripHtml } from '../helpers/utils';
import { useFetch } from '../hooks/useFetch';
import { CardBody, CardButton, CardFooter, CardHeader, CardWrapper } from './Card';
import { ErrorText } from './ErrorText';
import { Spinner } from './Spinner';
import { Text } from './Text';

export function ResultsBox(props: { pokemon: string }) {
  const { data, error } = useFetch(
    (signal: AbortSignal) => getTranslation(props.pokemon, signal),
    [props.pokemon]
  );

  if (!data) {
    return error ? <ErrorText>{error.message}</ErrorText> : <Spinner />;
  } else {
    return (
      <CardWrapper>
        <CardHeader>
          <Text size={1.75} weight="bold" align="center">
            Shakespeare says of{" "}
            <Text transform="capitalize" size={1.75} weight="bold">
              {props.pokemon}
            </Text>
          </Text>
        </CardHeader>
        <CardBody>
          <div>
            {data.split("\\n").map((line, index) => (
              <p key={`line-${index}`}>{stripHtml(line)}</p>
            ))}
          </div>
        </CardBody>
        <CardFooter>
          <CardButton>Add to Favorite</CardButton>
        </CardFooter>
      </CardWrapper>
    );
  }
}
