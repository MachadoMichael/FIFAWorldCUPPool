import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 248px;
  height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 32px;
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  margin-top: 0px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.INTER};
  `}
`;
