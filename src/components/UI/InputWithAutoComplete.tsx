import React, { ChangeEvent, useState } from "react";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import styled from "styled-components";

import { colors, Spacing } from "../../helpers/style";
import { InputProps } from "../../type/input";

/**
 * Input with auto complete functionality
 * it needs also the suggestions to be shown
 */
export function InputWithAutoComplete(
  props: InputProps<string> & { data: string[] }
) {
  // index of suggestions
  const [focused, setFocused] = useState<number>();
  const [search, setSearch] = useState<{ text: string; suggestions: string[] }>(
    {
      text: props.value || "",
      suggestions: [],
    }
  );
  const [isComponentVisible, setIsComponentVisible] = useState(true);

  const { suggestions } = search;

  return (
    <Container onKeyDown={handleKeyDown}>
      <div>
        <Input
          id="input"
          autoComplete="off"
          value={search.text}
          onChange={onTextChanged}
          type={"text"}
          placeholder="Start typing..."
          aria-label="pokemon-input"
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
          {suggestions.map((item, index) => (
            <AutoCompleteItem
              key={item}
              focused={index === focused}
              data-testid={item}
            >
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

  function onTextChanged(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    let suggestions: string[] = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = props.data.sort().filter((v) => regex.test(v));
    }
    setIsComponentVisible(true);
    setSearch({ suggestions, text: value });
  }

  function suggestionSelected(value: string) {
    setIsComponentVisible(false);

    setSearch({
      text: "",
      suggestions: [],
    });
    props.onChange(value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (focused !== undefined) {
          setFocused(focused - 1);
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        // in this case we need to exit ?? by adding the case "Tab":
        if (suggestions.length - 1 === focused) {}
        const prevFocused = focused === undefined ? -1 : focused;
        setFocused(prevFocused + 1);
        break;

      case "Enter":
        event.preventDefault();
        const pokemonSelected = search.suggestions.find(
          (_, index) => index === focused
        );
        if (pokemonSelected) {
          suggestionSelected(pokemonSelected);
        }
        break;
      case "Tab":
      case "Escape":
        setIsComponentVisible(false);
        setSearch({
          text: "",
          suggestions: [],
        });
        setFocused(undefined);
        props.onChange(undefined);
        break;

      default:
        break;
    }
  }
}

const ValueWrapper = styled.input`
  width: 100%;
  padding-left: 8px;
  padding-right: ${Spacing.large};
  height: ${Spacing.large};
  box-sizing: border-box;
  border-radius: 1px;
  border: 1px solid ${colors.border};
  line-height: 2rem;
`;

const AutoCompleteIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: ${Spacing.large};
  width: ${Spacing.large};
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

const AutoCompleteItem = styled.li<{ focused?: boolean }>`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: ${colors.lightBlue};
  }
  ${(props) =>
    props.focused &&
    `
  background-color: ${colors.lightBlue};
  `}
`;

const AutoCompleteItemButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  line-height: 2rem;
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
  margin: ${Spacing.large} auto;
`;
