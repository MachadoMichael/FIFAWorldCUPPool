import { Container } from "./styles";
import { SquaresFour } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

export function TabsButton() {
  const navigate = useNavigate();
  const { COLORS } = useTheme();
  return (
    <Container onClick={() => navigate("/menutabs")}>
      <SquaresFour size={32} color={COLORS.WHITE_300}></SquaresFour>
    </Container>
  );
}
