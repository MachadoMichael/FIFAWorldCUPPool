import { PlayoffGameType } from "../../../@types/PlayoffsData";
import { getClashWinner } from "../getClashWinner";

import {
  clash1_Round16,
  clash2_Round16,
  clash3_Round16,
  clash4_Round16,
  clash5_Round16,
  clash6_Round16,
  clash7_Round16,
  clash8_Round16,
} from "../Round16/round16Clashes";

export const clash1_QuarterFinal = {
  teamA: getClashWinner(clash1_Round16),
  teamB: getClashWinner(clash2_Round16),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash2_QuarterFinal = {
  teamA: getClashWinner(clash3_Round16),
  teamB: getClashWinner(clash4_Round16),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash3_QuarterFinal = {
  teamA: getClashWinner(clash5_Round16),
  teamB: getClashWinner(clash6_Round16),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash4_QuarterFinal = {
  teamA: getClashWinner(clash7_Round16),
  teamB: getClashWinner(clash8_Round16),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;
