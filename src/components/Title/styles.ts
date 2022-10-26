import styled, { css } from "styled-components";

export const TextMD = styled.h1`
  ${({ theme }) => css`
    text-shadow: 1px 1px 0px ${theme.COLORS.GRAY_800};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
    color: ${theme.COLORS.WHITE_300};
  `};
`;
