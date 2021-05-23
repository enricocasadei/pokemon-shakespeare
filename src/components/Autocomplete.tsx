import React, { ChangeEvent, useState } from 'react';
import styled, { css } from 'styled-components';

import { getOriginalPokemonList } from '../api/pokemon';
import { useFetch } from '../hooks/useFetch';
import { InputProps } from '../type/input';


export const baseButtonMixin = css`
  background: none;
  border: none;
  padding: 0;
`;

export const ValueWrapper = styled.input`
  width: 100%;
  padding-left: 8px;
  padding-right: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 1px;
  border: 1px solid #b6c1ce;
  line-height: 32px;
`;

export const AutoCompleteIcon = styled.span<{ open?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  width: 32px;
  transition: all 150ms linear;
  transform: ${(props) => (props.open ? "rotate(0.5turn)" : "none")};
  transform-origin: center;
  display: flex;

  svg {
    margin: auto;
  }

  ${ValueWrapper}:focus + & {
    color: #0063cc;
    fill: #0063cc;
  }
`;

export const AutoCompleteContainer = styled.ul`
  background: #fff;
  padding: 8px 0;
  list-style-type: none;
  min-width: 320px;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #b6c1ce;
  border-radius: 2px;
  margin: 0;
  box-sizing: border-box;
  max-height: 280px;
  overflow-y: auto;
  z-index: 1;
`;

export const AutoCompleteItem = styled.li`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: #ebf4ff;
  }
`;

export const AutoCompleteItemButton = styled.button`
  ${baseButtonMixin} width: 100%;
  line-height: 32px;
  text-align: left;
  &:active {
    outline: none;
    color: #0076f5;
  }
`;
export const Input = styled(ValueWrapper)`
  transition: border-color 150ms linear;

  &:focus {
    border-color: #0063cc;
    outline: none;

    + ${AutoCompleteIcon} {
      color: #0063cc;
      fill: #0063cc;
    }
  }
`;

const Container = styled.div`
  position: relative;
  width: 320px;
`;

export function AutoComplete(props: InputProps<string>) {
  const { data = [] } = useFetch(
    (signal: AbortSignal) => getOriginalPokemonList(signal),
    []
  );
  const [search, setSearch] = useState<{ text: string; suggestions: string[] }>(
    {
      text: "",
      suggestions: [],
    }
  );
  const [isComponentVisible, setIsComponentVisible] = useState(true);

  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let suggestions: string[] = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter((v) => regex.test(v));
    }
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  };

  const suggestionSelected = (value: string) => {
    setIsComponentVisible(false);

    setSearch({
      text: value,
      suggestions: [],
    });
  };

  const { suggestions } = search;

  return (
    <Container>
      <div
        onClick={() => setIsComponentVisible(false)}
        style={{
          display: isComponentVisible ? "block" : "none",
          width: "200vw",
          height: "200vh",
          backgroundColor: "transparent",
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      />
      <div>
        <Input
          id="input"
          autoComplete="off"
          value={search.text}
          onChange={onTextChanged}
          type={"text"}
        />
        <AutoCompleteIcon open={isComponentVisible}></AutoCompleteIcon>
      </div>
      {suggestions.length > 0 && isComponentVisible && (
        <AutoCompleteContainer>
          {suggestions.map((item) => (
            <AutoCompleteItem key={item}>
              <AutoCompleteItemButton
                key={item}
                onClick={() => suggestionSelected(item)}
              >
                {item}
              </AutoCompleteItemButton>
            </AutoCompleteItem>
          ))}
        </AutoCompleteContainer>
      )}
    </Container>
  );
}
