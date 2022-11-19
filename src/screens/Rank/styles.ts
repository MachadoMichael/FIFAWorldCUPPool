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
  overflow: auto;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_800};
  `}
`;

export const RankInterface = styled.section`
  max-height: 80vh;
`;

export const RankList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
