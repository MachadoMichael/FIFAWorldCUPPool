import { PlayoffGameType } from "../../../@types/PlayoffsData";
import { getClashWinner } from "../getClashWinner";

import {
  clash1_SemiFinal,
  clash2_SemiFinal,
} from "./../Semifinal/SemifinalsClashes";

export const clash_Final = {
  teamA: getClashWinner(clash1_SemiFinal),
  teamB: getClashWinner(clash2_SemiFinal),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
} as PlayoffGameType;
