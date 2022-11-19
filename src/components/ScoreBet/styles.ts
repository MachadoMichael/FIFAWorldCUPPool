import styled, { css } from "styled-components";

export const Container = styled.section`
  height: 45px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;

  ${({ theme }) => css`
    text-shadow: 1px 1px 0px ${theme.COLORS.GRAY_800};
    padding: ${theme.PADDING.MD}px;
    color: ${theme.COLORS.WHITE_300};
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
  `};
`;

export const Input = styled.input`
  width: 40px;
  height: 40px;
  margin: 8px;
  border: none;
  text-align: center;
  ${({ theme }) => css`
    box-shadow: ${theme.BOX_SHADOW};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
    text-shadow: 1px 1px 0px ${theme.COLORS.GRAY_800};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.WHITE_300};
    background-color: ${theme.COLORS.GRAY_800};
  `};
`;
