import { Container, Input } from "./styles";
import { useState, useEffect } from "react";

import { GroupGameType } from "../../@types/GroupData";
import { PlayoffGameType } from "../../@types/PlayoffsData";

type Props = {
  game: GroupGameType | PlayoffGameType;
};

export function ScoreBet({ game }: Props) {
  const [scoreBetTeamA, setScoreBetTeamA] = useState(
    game.scoreTeamA.toString()
  );
  const [scoreBetTeamB, setScoreBetTeamB] = useState(
    game.scoreTeamB.toString()
  );

  useEffect(() => {
    game.scoreTeamA = parseInt(scoreBetTeamA);
    game.scoreTeamB = parseInt(scoreBetTeamB);
  }, [scoreBetTeamA, scoreBetTeamB]);

  return (
    <Container>
      <Input
        type="text"
        value={scoreBetTeamA}
        onChange={(e) => setScoreBetTeamA(e.target.value)}
      />
      x
      <Input
        type="text"
        value={scoreBetTeamB}
        onChange={(e) => setScoreBetTeamB(e.target.value)}
      />
    </Container>
  );
}
