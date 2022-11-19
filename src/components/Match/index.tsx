import { FlagBox } from "../FlagBox";
import { Scoreboard } from "../Scoreboard";
import { Container } from "./styles";

import { GroupGameType } from "../../@types/GroupData";
import { ScoreBet } from "../ScoreBet";
import { PlayoffGameType } from "../../@types/PlayoffsData";

type Props = {
  game: GroupGameType | PlayoffGameType;
  mode: string;
};

export function Match({ game, mode }: Props) {
  return (
    <Container>
      <FlagBox teamName={game.teamA} />

      {mode === "result" ? (
        <Scoreboard scoreTeamA={game.scoreTeamA} scoreTeamB={game.scoreTeamB} />
      ) : (
        <ScoreBet game={game} />
      )}

      <FlagBox teamName={game.teamB} />
    </Container>
  );
}
