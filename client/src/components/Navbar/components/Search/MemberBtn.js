import React from 'react';
import styled, { css } from 'styled-components';
import { flexCenter } from '../../../../styles/theme';

const StyledBtn = styled.button`
  ${flexCenter};
  width: 32px;
  height: 32px;
  color: ${({ disabled, theme }) => disabled ? theme.gray1 : theme.gray2};
  border: 1px solid ${({ disabled, theme }) => disabled ? theme.gray1 : theme.gray2};
  border-radius: 50%;
  font-size: 28px;

  &:hover {
  border: 1px solid ${({ theme }) => theme.themeBlack};
  color: ${({ theme }) => theme.themeBlack};
  }
`;

const MemberBtn = ({ children, condition, clickEvent }) => {
  return (
    <StyledBtn
      onClick={clickEvent}
      disabled={condition}>
      {children}
    </StyledBtn>
  )
}

export default MemberBtn

