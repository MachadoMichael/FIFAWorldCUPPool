import { Button } from "../../components/Button";
import { Container } from "./styles";

export function MenuTabs() {
  return (
    <Container>
      <Button text="RANK" />
      <Button text="GRUPOS" />
      <Button text="MATA-MATA" />
      <Button text="DESCONECTAR" />
    </Container>
  );
}
