import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 200px;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  border: 1px solid transparent;
  transition: 0.5s;
  ${({ theme }) => css`
    box-shadow: ${theme.BOX_SHADOW};
    background-color: ${theme.COLORS.GRAY_800};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
    padding: ${theme.PADDING.MD}px;

    &:has(input:focus) {
      border-color: ${theme.COLORS.GRAY_400};
    }
  `}
`;

export const InputText = styled.input`
  margin-left: 8px;
  border: none;
  background-color: transparent;
  outline: none;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE_300};
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
  `};
`;

export const IconContainer = styled.section`
  height: 100%;
`;
