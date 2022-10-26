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
    background-color: linear-gradient(${theme.COLORS.GRAY_800});
  `}
`;
