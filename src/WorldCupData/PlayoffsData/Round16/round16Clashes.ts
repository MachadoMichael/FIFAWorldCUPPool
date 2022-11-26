import { PlayoffGameType } from "../../../@types/PlayoffsData";
import { getTeamsClassified } from "./getTeamsClassified";

const first = 0;
const second = 1;

export const clash1_Round16 = {
  teamA: getTeamsClassified("GroupA", first),
  teamB: getTeamsClassified("GroupB", second),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash2_Round16 = {
  teamA: getTeamsClassified("GroupC", first),
  teamB: getTeamsClassified("GroupD", second),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash3_Round16 = {
  teamA: getTeamsClassified("GroupE", first),
  teamB: getTeamsClassified("GroupF", second),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash4_Round16 = {
  teamA: getTeamsClassified("GroupG", first),
  teamB: getTeamsClassified("GroupH", second),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash5_Round16 = {
  teamA: getTeamsClassified("GroupB", first),
  teamB: getTeamsClassified("GroupA", second),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash6_Round16 = {
  teamA: getTeamsClassified("GroupD", first),
  teamB: getTeamsClassified("GroupC", second),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash7_Round16 = {
  teamA: getTeamsClassified("GroupF", first),
  teamB: getTeamsClassified("GroupE", second),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;

export const clash8_Round16 = {
  teamA: getTeamsClassified("GroupH", first),
  teamB: getTeamsClassified("GroupG", second),
  scoreTeamA: 0,
  scoreTeamB: 0,
  penaltysTeamA: 0,
  penaltysTeamB: 0,
  concluded: false,
} as PlayoffGameType;
