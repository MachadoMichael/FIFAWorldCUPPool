import styled, { css } from "styled-components";

export type ButtonProps = "RED" | "LIGHT";

type Props = {
  type: ButtonProps;
};

export const Container = styled.section<Props>`
  width: 200px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ theme, type }) => css`
    background-color: ${type === "RED"
      ? theme.COLORS.RED_700
      : theme.COLORS.GRAY_400};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
  `};
`;

export const Text = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
    color: ${theme.COLORS.WHITE_300};
    text-shadow: 1px 1px 0px ${theme.COLORS.GRAY_800};
  `}
`;
