import styled from 'styled-components';

const MediaQuery = {
  xs: "480px",
  s: "768px",
  m: "1024px",
  l: "1440px",
} as const;
type MediaSize = keyof typeof MediaQuery;

const Spacing = {
  xsmall: "8px",
  small: "16px",
  medium: "24px",
  large: "32px",
} as const;
type SpacingSize = keyof typeof Spacing;

export const Grid = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  & > * {
    margin: 0;
  }
  & > * > :last-child {
    margin-bottom: 0;
  }
`;

export const Box = styled.div``


export const Row = styled.div<{
  gap?: SpacingSize;
  pad?: SpacingSize;
  justify?: keyof typeof AlignStyle.justify;
  align?: keyof typeof AlignStyle.align;
}>`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  ${(props) => props.pad && `padding:${Spacing[props.pad]}`};
  ${(props) => props.gap && `gap:${Spacing[props.gap]}`};
  ${(props) => props.align && `align-items:${AlignStyle.align[props.align]}`}
  ${(props) =>
    props.justify && `justify-content:${AlignStyle.justify[props.justify]}`};
`;

export const Col = styled.div<{
  size?: number;
  collapse?: MediaSize | true;
  background?: string;
  width?: string;
  align?: keyof typeof AlignStyle.align;
  justify?: keyof typeof AlignStyle.justify;
  gap?: SpacingSize;
  pad?: SpacingSize;
}>`
  box-sizing: border-box;
  max-width: 100%;
  ${(props) => props.pad && `padding:${Spacing[props.pad]}`};
  ${(props) => props.gap && `gap:${Spacing[props.gap]}`};
  flex: ${(props) => (props.size ? `${props.size} 0 auto` : `1 0 auto`)};
  ${(props) =>
    props.align &&
    `align-items:${AlignStyle.align[props.align]}; text-align: center;`};
  ${(props) =>
    props.justify && `justify-content:${AlignStyle.justify[props.justify]}`};
  ${(props) => props.background && `background: ${props.background}`};
  ${(props) => props.width && `width: ${props.width}`};
`;

const AlignStyle = {
  justify: {
    around: "space-around",
    between: "space-between",
    start: "flex-start",
    end: "flex-end",
    center: "center",
  },
  align: {
    start: "flex-start",
    end: "flex-end",
    center: "center",
  },
};

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${MediaQuery.xs}) {
    max-width: 480px;
    padding-left: 26px;
    padding-right: 26px;
  }
  @media (min-width: ${MediaQuery.s}) {
    max-width: 768px;
    padding-left: 28px;
    padding-right: 28px;
  }
  @media (min-width: ${MediaQuery.m}) {
    max-width: 1024px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: ${MediaQuery.l}) {
    max-width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Section = styled.div`
  box-sizing: border-box;

  @media (min-width: ${MediaQuery.xs}) {
    padding-top: 26px;
    padding-bottom: 26px;
  }
  @media (min-width: ${MediaQuery.s}) {
    padding-top: 28px;
    padding-bottom: 28px;
  }
  @media (min-width: ${MediaQuery.m}) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media (min-width: ${MediaQuery.l}) {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;
