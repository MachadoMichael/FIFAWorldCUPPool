type GroupGameType = {
  teamA: string;
  teamB: string;
  scoreTeamA: number;
  scoreTeamB: number;
  concluded: boolean;
};

type TeamType = {
  id: string;
  points: number;
  goalDifference: number;
};

export type GroupDataType = {
  name: string;
  teams: TeamType[];
  clashes: GroupGameType[];
};
