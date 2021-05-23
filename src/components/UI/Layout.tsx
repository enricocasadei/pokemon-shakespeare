import styled, { createGlobalStyle } from 'styled-components';

import { colors, MediaQuery } from '../../helpers/style';

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

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${MediaQuery.xs}) {
    max-width: ${MediaQuery.xs};
    padding-left: 26px;
    padding-right: 26px;
  }
  @media (min-width: ${MediaQuery.s}) {
    max-width: ${MediaQuery.s};
    padding-left: 28px;
    padding-right: 28px;
  }
  @media (min-width: ${MediaQuery.m}) {
    max-width: ${MediaQuery.m};
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: ${MediaQuery.l}) {
    max-width: ${MediaQuery.m};
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Section = styled.div<{ align?: string }>`
  box-sizing: border-box;
  text-align: ${(props) => (props.align ? props.align : "left")};
  padding-top: 32px;
  padding-bottom: 32px;

  @media (max-width: ${MediaQuery.xs}) {
    padding-top: 26px;
    padding-bottom: 26px;
  }
  @media (max-width: ${MediaQuery.s}) {
    padding-top: 28px;
    padding-bottom: 28px;
  }
  @media (max-width: ${MediaQuery.m}) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;
