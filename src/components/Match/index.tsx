import { FlagBox } from "../FlagBox";
import { Scoreboard } from "../Scoreboard";
import { Container } from "./styles";

type Props = {
  teamA: string;
  teamB: string;
  scoreTeamA: number;
  scoreTeamB: number;
};

export function Match({ teamA, teamB, scoreTeamA, scoreTeamB }: Props) {
  return (
    <Container>
      <FlagBox team={teamA} />
      <Scoreboard scoreTeamA={scoreTeamA} scoreTeamB={scoreTeamB} />
      <FlagBox team={teamB} />
    </Container>
  );
}
