import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 58px;
  height: 45px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  ${({ theme }) => css`
    border-radius: ${theme.BORDER_RADIUS.SM}px;
    background-color: ${theme.COLORS.GRAY_800};
    padding: ${theme.PADDING.MD}px;
  `}
`;

export const Flag = styled.section<{ image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
