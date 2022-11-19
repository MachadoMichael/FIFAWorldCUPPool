import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    background-image: linear-gradient(${theme.COLORS.QATAR_GRADIENT});
  `}
`;

export const GamesInterface = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const SelectorContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: 220px;
`;