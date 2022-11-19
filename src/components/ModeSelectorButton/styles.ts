import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
  `}
`;

export const ButtonSelectMode = styled.section`
  width: 100px;
  height: 30px;
  margin-top: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  ${({ theme }) => css`
    box-shadow: ${theme.BOX_SHADOW};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
    background-color: ${theme.COLORS.GRAY_800};
    color: ${theme.COLORS.WHITE_300};
    &:hover {
      background-color: ${theme.COLORS.RED_700};
      cursor: pointer;
    }
  `};
`;
