import styled, { css } from "styled-components";
import BackgroundFIFAWorldCup from "../../assets/colorful-vector-fifa-world-cup-2022-zbeqxd6ol8d8xt54.jpg";

export const Container = styled.main`
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background-image: url(${BackgroundFIFAWorldCup});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
`;

export const LoginInterface = styled.section`
  position: fixed;
  bottom: 21%;
`;

export const NewUser = styled.section`
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
