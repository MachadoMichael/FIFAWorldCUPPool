import styled, { css } from "styled-components";

export type PlayerRankBoxProps = "RED" | "LIGHT";

type Props = {
  type: PlayerRankBoxProps;
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
    box-shadow: ${theme.BOX_SHADOW};
    background-color: ${type === "RED"
      ? theme.COLORS.RED_700
      : theme.COLORS.GRAY_400};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
    padding: ${theme.PADDING.MD}px;
  `};
`;

export const Section = styled.section`
  width: 90%;
  margin: 0;
  margin-left: 10px;
  padding: 0;
  height: 100%;
  align-items: center;
`;

export const Text = styled.h5`
  text-shadow: 1px 1px 0px #000;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE_300};
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
  `};
`;
