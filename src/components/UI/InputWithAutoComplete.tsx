import React, { ChangeEvent, useState } from 'react';
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

import { getOriginalPokemonList } from '../../api/pokemon';
import { colors } from '../../helpers/style';
import { useFetch } from '../../hooks/useFetch';
import { InputProps } from '../../type/input';

export function InputWithAutoComplete(props: InputProps<string>) {
  const { data = [] } = useFetch(
    (signal: AbortSignal) => getOriginalPokemonList(signal),
    []
  );
  const [search, setSearch] = useState<{ text: string; suggestions: string[] }>(
    {
      text: props.value || "",
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
      text: "",
      suggestions: [],
    });
    props.onChange(value);
  };

  const { suggestions } = search;

  return (
    <Container>
      <div>
        <Input
          id="input"
          autoComplete="off"
          value={search.text}
          onChange={onTextChanged}
          type={"text"}
          placeholder="Start typing..."
        />
        <AutoCompleteIcon>
          {!isComponentVisible ? (
            <FaRegArrowAltCircleDown />
          ) : (
            <FaRegArrowAltCircleUp />
          )}
        </AutoCompleteIcon>
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

const ValueWrapper = styled.input`
  width: 100%;
  padding-left: 8px;
  padding-right: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 1px;
  border: 1px solid ${colors.border};
  line-height: 32px;
`;

const AutoCompleteIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  width: 32px;
  line-height: 2.25;

  ${ValueWrapper}:focus + & {
    color: ${colors.link};
    fill: ${colors.link};
  }
`;

const AutoCompleteContainer = styled.ul`
  background: #fff;
  padding: 8px 0;
  list-style-type: none;
  min-width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid ${colors.border};
  border-radius: 2px;
  margin: 0;
  box-sizing: border-box;
  max-height: 280px;
  overflow-y: auto;
  z-index: 1;
`;

const AutoCompleteItem = styled.li`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: ${colors.lightBlue};
  }
`;

const AutoCompleteItemButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  line-height: 32px;
  text-align: left;
  &:active {
    color: ${colors.blue};
  }
`;
const Input = styled(ValueWrapper)`
  transition: border-color 150ms linear;

  &:focus {
    border-color: ${colors.link};
    + ${AutoCompleteIcon} {
      color: ${colors.link};
      fill: ${colors.link};
    }
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 460px;
  margin: 32px auto;
`;
