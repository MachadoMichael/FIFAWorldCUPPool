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
  z-index: 1;
  ${({ theme }) => css`
    background-image: linear-gradient(${theme.COLORS.QATAR_GRADIENT});
  `}
`;

export const MessageContainer = styled.section`
  width: 80%;
  text-align: center;
`;

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE_300};
    font-family: ${theme.FONT_FAMILY.INTER}, sans serif;
    text-shadow: 1px 1px 0px ${theme.COLORS.GRAY_800};
  `}
`;
