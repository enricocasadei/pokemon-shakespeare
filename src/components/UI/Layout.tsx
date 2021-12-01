import styled, { createGlobalStyle } from "styled-components";

import { colors, MediaQuery } from "../../helpers/style";

/**
 * global style to be applied directly on the <html> tag
 */
export const GlobalStyle = createGlobalStyle`
  html {
    font-family: Titillium Web, sans-serif;
    padding: 0px;
    margin: 0px;
    background-color: #eff1f3;
    color: ${colors.text};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

/**
 * it manages the width and the horizontal spacing
 * */
export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${MediaQuery.xsmall}) {
    max-width: ${MediaQuery.xsmall};
    padding-left: 26px;
    padding-right: 26px;
  }
  @media (min-width: ${MediaQuery.small}) {
    max-width: ${MediaQuery.small};
    padding-left: 28px;
    padding-right: 28px;
  }
  @media (min-width: ${MediaQuery.medium}) {
    max-width: ${MediaQuery.medium};
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: ${MediaQuery.large}) {
    max-width: ${MediaQuery.medium};
    padding-left: 32px;
    padding-right: 32px;
  }
`;

/**
 * it manages the vertical spacing
 * */
export const Section = styled.div<{ align?: string }>`
  box-sizing: border-box;
  text-align: ${(props) => (props.align ? props.align : "left")};
  padding-top: 32px;
  padding-bottom: 32px;

  @media (max-width: ${MediaQuery.xsmall}) {
    padding-top: 26px;
    padding-bottom: 26px;
  }
  @media (max-width: ${MediaQuery.small}) {
    padding-top: 28px;
    padding-bottom: 28px;
  }
  @media (max-width: ${MediaQuery.medium}) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;
