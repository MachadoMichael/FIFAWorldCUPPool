import { GroupRound } from "../GroupRound";
import { Container } from "./styles";

export function AllRoundsGroup() {
  //ler o objeto group e enviar cada confronto para o groupRound
  return (
    <Container>
      <GroupRound />
      <GroupRound />
      <GroupRound />
    </Container>
  );
}
