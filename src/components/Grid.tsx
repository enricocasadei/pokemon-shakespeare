import styled from 'styled-components';

const MediaQuery = {
  xs: "480px",
  s: "768px",
  m: "1024px",
  l: "1440px",
} as const;
type MediaSize = keyof typeof MediaQuery;

const Gutter = {
  xsmall: "8px",
  small: "16px",
  medium: "24px",
  large: "32px",
} as const;
type GapSize = keyof typeof Gutter;

const media = {
  xs: (styles: string) => `
    @media only screen and (max-width: 480px){
        ${styles}
    }
    `,
  s: (styles: string) => `
    @media only screen and (max-width: 768px){
        ${styles}
    }
    `,
  m: (styles: string) => `
    @media only screen and (max-width: 1024px){
        ${styles}
    }
    `,
  l: (styles: string) => `
    @media only screen and (max-width: 1440px){
        ${styles}
    }
    `,
};

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

  @media (max-width: ${MediaQuery.xs}) {
    .uk-grid {
      margin-left: -8px;
    }
    .uk-grid > * {
      padding-left: 8px;
    }
  }

  @media (min-width: ${MediaQuery.s}) {
    .uk-grid {
      margin-left: -16px;
    }
    .uk-grid > * {
      padding-left: 16px;
    }
  }

  @media (min-width: ${MediaQuery.m}) {
    .uk-grid {
      margin-left: -24px;
    }
    .uk-grid > * {
      padding-left: 24px;
    }
  }

  @media (min-width: ${MediaQuery.l}) {
    .uk-grid {
      margin-left: -32px;
    }
    .uk-grid > * {
      padding-left: 32px;
    }
  }
`;

export const Row = styled.div<{
  gap?: GapSize;
  justify?: keyof typeof AlignStyle.justify;
  align?: keyof typeof AlignStyle.align;
}>`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  ${(props) => props.gap && `gap:${Gutter[props.gap]}`};
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
}>`
  box-sizing: border-box;
  max-width: 100%;
  flex: ${(props) => (props.size ? `${props.size} 0 auto` : `1 0 auto`)};
  ${(props) =>
    props.align &&
    `align-items:${AlignStyle.align[props.align]}; text-align: center;`};
  ${(props) =>
    props.justify && `justify-content:${AlignStyle.justify[props.justify]}`};
  ${(props) =>
    props.collapse &&
    (props.collapse === true
      ? media["s"](`
    display:none;
    `)
      : media[props.collapse](`
display:none;
`))};
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
