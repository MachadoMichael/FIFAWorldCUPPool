export type PlayoffGameType = {
  teamA: string;
  teamB: string;
  scoreTeamA: number;
  scoreTeamB: number;
  penaltysTeamA: number;
  penaltysTeamB: number;
};

export type PlayoffsPhaseData = {
  phaseName: string;
  clashes: PlayoffGameType[];
};
