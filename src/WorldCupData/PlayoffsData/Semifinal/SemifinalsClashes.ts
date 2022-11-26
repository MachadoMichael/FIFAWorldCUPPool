import { PlayoffGameType } from "../../../@types/PlayoffsData";
import { getClashWinner } from "../getClashWinner";

import {
  clash1_QuarterFinal,
  clash2_QuarterFinal,
  clash3_QuarterFinal,
  clash4_QuarterFinal,
} from "../Quarterfinals/quarterfinalsClashes";

export const clash1_SemiFinal = {
  teamA: getClashWinner(clash1_QuarterFinal),
  teamB: getClashWinner(clash2_QuarterFinal),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash2_SemiFinal = {
  teamA: getClashWinner(clash3_QuarterFinal),
  teamB: getClashWinner(clash4_QuarterFinal),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;
