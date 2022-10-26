import styled, { css } from "styled-components";

export const Container = styled.section`
  height: 45px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${({ theme }) => css`
    text-shadow: 1px 1px 0px ${theme.COLORS.GRAY_800};
    padding: ${theme.PADDING.MD}px;
    color: ${theme.COLORS.WHITE_300};
  `};
`;

export const Text = styled.h5`
  margin: 8px;
  ${({ theme }) => css`
    text-shadow: 1px 1px 0px ${theme.COLORS.GRAY_800};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.WHITE_300};
  `};
`;
