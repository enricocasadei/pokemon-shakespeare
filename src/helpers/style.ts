/* centralize the color palette */
export const colors = {
  link: "#0063cc",
  border: "#b6c1ce",
  blue: "#0076f5",
  lightBlue: "#ebf4ff",
  critical: "#d11e0d",
  disabled: "#b6c1ce",
  text: "#19191a",
} as const;

/* centralize the breakpoint */
export const MediaQuery = {
  xsmall: "480px",
  small: "768px",
  medium: "1024px",
  large: "1440px",
} as const;
export type MediaSize = keyof typeof MediaQuery;

export const Spacing = {
  xsmall: "8px",
  small: "16px",
  medium: "24px",
  large: "32px",
} as const;
export type SpacingSize = keyof typeof Spacing;
