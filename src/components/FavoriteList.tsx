import React from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

import { colors } from "../helpers/style";
import { useStorage } from "./FavoritesProvider";
import { CardBody, CardHeader, CardWrapper } from "./UI/Card";
import { Text } from "./UI/Text";

/**
 * List of favorite pokemon. It allows removing a single pokemon
 */
export function FavoriteList() {
  const { store, removePokemon } = useStorage();
  const pokemons = store[0];
  return (
    <CardWrapper>
      <CardHeader>
        <Text weight="bold" size={1.5}>
          List of favorite pokemon
        </Text>
      </CardHeader>

      <CardBody>
        {pokemons === null || pokemons.length === 0 ? (
          <Text size={1}>There are no pokemon selected</Text>
        ) : (
          <List>
            {pokemons.map((pokemon) => (
              <li key={`pokemon-key-${pokemon.name}`}>
                <img
                  alt={pokemon.name}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                />
                <Text transform="capitalize" size={1.25}>
                  {pokemon.name}
                </Text>
                <RemovePreference
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    removePokemon(pokemon);
                  }}
                >
                  <FaTrash />
                </RemovePreference>
              </li>
            ))}
          </List>
        )}
      </CardBody>
    </CardWrapper>
  );
}

const List = styled.ul`
  padding: 0;
  list-style: none;
  & > li {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }
  & > li > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  & > li > span {
    flex: 1;
  }
`;

const RemovePreference = styled.a`
  color: ${colors.text};
  &:hover {
    color: ${colors.critical};
  }
`;
