import styled, { css } from "styled-components";

export const Container = styled.main`
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    background-image: linear-gradient(${theme.COLORS.QATAR_GRADIENT});
  `}
`;

export const RegisterInterface = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackLoginScreen = styled.section`
  margin-top: 8px;

  text-align: end;
  transition: 0.5s;
  font-weight: bold;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE_300};
    font-family: ${theme.FONT_FAMILY.INTER}, sans-serif;
    font-size: ${theme.FONT_SIZE.SM}px;
    text-shadow: 1px 1px 0px ${theme.COLORS.GRAY_800};
    &:hover {
      cursor: pointer;
      color: ${theme.COLORS.GRAY_400};
    }
  `}
`;
