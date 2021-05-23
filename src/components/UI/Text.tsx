import styled from 'styled-components';

export const Text = styled.span<{
  size?: number;
  weight?: "bold";
  align?: string;
  color?: string;
  transform?: "uppercase" | "capitalize";
}>`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  font-size: ${(props) => (props.size ? props.size : "1")}rem;
  font-weight: ${(props) => (props.weight ? props.weight : "inherit")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  ${(props) => props.transform && `text-transform:${props.transform}`};
  ${(props) => props.color && `color:${props.color}`};
`;
