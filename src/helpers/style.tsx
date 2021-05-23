export const colors = {
  link: "#0063cc",
  border: "#b6c1ce",
  blue: "#0076f5",
  lightBlue: "#ebf4ff",
  critical: "#d11e0d",
  disabled: "#b6c1ce",
} as const;

export const MediaQuery = {
  xs: "480px",
  s: "768px",
  m: "1024px",
  l: "1440px",
} as const;
export type MediaSize = keyof typeof MediaQuery;

export const Spacing = {
  xsmall: "8px",
  small: "16px",
  medium: "24px",
  large: "32px",
} as const;
export type SpacingSize = keyof typeof Spacing;

export const media = {
  xs: (styles: string) => `
    @media only screen and (max-width: ${MediaQuery.xs}){
        ${styles}
    }
    `,
  s: (styles: string) => `
    @media only screen and (max-width: ${MediaQuery.s}){
        ${styles}
    }
    `,
  m: (styles: string) => `
    @media only screen and (max-width: ${MediaQuery.m}){
        ${styles}
    }
    `,
  l: (styles: string) => `
    @media only screen and (max-width: ${MediaQuery.l}){
        ${styles}
    }
    `,
};
