import styled from 'styled-components';

export const Text = styled.span<{
    size?: number;
    weight?: "bold";
    align?: string;
    transform?: "uppercase" | "capitalize";
  }>`
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    font-size: ${(props) => (props.size ? props.size : "1.5")}rem;
    font-weight: ${(props) => (props.weight ? props.weight : "normal")};
    text-align: ${(props) => (props.align ? props.align : "left")};
    ${(props) => props.transform && `text-transform:${props.transform}`};
  `;