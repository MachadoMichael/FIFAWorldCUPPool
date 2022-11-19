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
  margin-bottom: 8px;
  transition: 0.5s;
  ${({ theme, type }) => css`
    box-shadow: ${theme.BOX_SHADOW};
    background-color: ${type === "RED"
      ? theme.COLORS.RED_700
      : theme.COLORS.GRAY_400};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid ${theme.COLORS.WHITE_300};
    }
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
