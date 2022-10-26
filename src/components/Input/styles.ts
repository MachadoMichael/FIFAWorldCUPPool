import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 200px;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_800};
    border-radius: ${theme.BORDER_RADIUS.SM}px;

    padding: ${theme.PADDING.MD}px;
    border: 1px solid ${theme.COLORS.GRAY_800};
    &:has(input:focus) {
      border-color: ${theme.COLORS.WHITE_300};
    }
  `}
`;

export const InputText = styled.input`
  margin-left: 10px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  outline: none;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE_300};
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
  `};
`;
