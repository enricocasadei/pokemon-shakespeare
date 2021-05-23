import styled from 'styled-components';

import { colors } from '../../helpers/style';

export const CardWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 460px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  background: #fff;
  margin-right: auto;
  margin-left: auto;
`;

export const CardHeader = styled.header`
  padding: 32px 32px;
  border-bottom: 1px solid ${colors.border};
`;

export const CardBody = styled.div`
  padding: 32px 32px 32px 32px;
`;

export const CardFooter = styled.div`
  border-top: 1px solid ${colors.border};
  padding: 32px 32px 32px 32px;
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: ${colors.blue};
  border: 0;
  border-radius: 34px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }

  ${(props) =>
    props.disabled &&
    `
  background-color: ${colors.border};
  cursor: not-allowed;
  pointer-events: all !important; 
  `}
`;
