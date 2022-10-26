import { Container, Text } from "./styles";

type Props = {
  scoreTeamA: number;
  scoreTeamB: number;
};

export function Scoreboard({ scoreTeamA, scoreTeamB }: Props) {
  return (
    <Container>
      <Text>{scoreTeamA}</Text>x<Text>{scoreTeamB}</Text>
    </Container>
  );
}
