import styled from 'styled-components';

import { colors } from '../../helpers/style';

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 100%;
  max-width: 460px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;

export const CardHeader = styled.header`
  padding: 32px 32px;
  border-bottom: 1px solid ${colors.border};
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFooter = styled.div`
  border-top: 1px solid ${colors.border};
  padding-right: 32px;
  padding-left: 32px;
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
  &:first-child {
    margin-top: 32px;
  }
`;
