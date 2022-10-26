import { Match } from "../Match";
import { Container, Title } from "./styles";

type Props = {

}

export function GroupRound() {
  return (
    <Container>
      <Title>A</Title>
      <Match teamA="Brasil" scoreTeamA={3} teamB="Suiça" scoreTeamB={1} />
      <Match teamA="Camarões" scoreTeamA={2} teamB="Servia" scoreTeamB={2} />
    </Container>
  );
}
