import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import React from 'react';

import { PokemonInput } from './PokemonInput';

describe("PokemonInput", () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.reset();
  });

  it("receives the input and show the dropdown correctly with pokemon: pikachu", async () => {
    fetchMock.mock({
      matcher: "https://pokeapi.co/api/v2/pokemon?limit=151",
      method: "GET",
      response: {
        status: 200,
        body: {
          count: 1,
          next: "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151",
          previous: null,
          results: [
            { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
          ],
        },
      },
    });

    const setup = async () => {
      const utils = render(<PokemonInput onChange={() => {}} />);
      const input = utils.getByLabelText("pokemon-input");
      await waitFor(() => screen.getByLabelText("pokemon-input"));
      return {
        input,
        ...utils,
      };
    };

    const { input } = await setup();

    fireEvent.change(input, { target: { value: "pikachu" } });

    expect(screen.getByTestId("pikachu")).toBeDefined();
  });
});
