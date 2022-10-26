import styled, { css } from "styled-components";

export type TeamboxStyleProps = "DARK" | "LIGHT";

type Props = {
  type: TeamboxStyleProps;
};

export const Container = styled.section<Props>`
  width: 260px;
  height: 45px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  ${({ theme, type }) => css`
    background-color: ${type === "DARK"
      ? theme.COLORS.GRAY_800
      : theme.COLORS.GRAY_400};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
    padding: ${theme.PADDING.MD}px;
  `}
`;

export const Section = styled.section`
  width: 90%;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Text = styled.h5`
  margin-left: 10px;
  text-transform: uppercase;
  border: none;
  ${({ theme }) => css`
    text-shadow: 1px 1px 0px ${theme.COLORS.GRAY_800};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE_300};
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
    background-color: ${theme.COLORS.GRAY_800};
  `};
`;
