import { pointsCalculator } from "../pointsCalculator";
import { GroupDataType, GroupGameType } from "../../../@types/GroupData";
import { goalDifferenceCalculator } from "../goalDifferenceCalculator";

export const GroupG_Clashes: GroupGameType[] = [
  {
    teamA: "Suiça",
    teamB: "Camarões",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Brasil",
    teamB: "Sérvia",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Camarões",
    teamB: "Sérvia",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Brasil",
    teamB: "Suiça",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Camarões",
    teamB: "Brasil",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Sérvia",
    teamB: "Suiça",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
];

export const GroupG_data: GroupDataType = {
  name: "GroupG",
  teams: [
    {
      id: "Brasil",
      points: pointsCalculator("Brasil", GroupG_Clashes),
      goalDifference: goalDifferenceCalculator("Brasil", GroupG_Clashes),
    },
    {
      id: "Camarões",
      points: pointsCalculator("Camarões", GroupG_Clashes),
      goalDifference: goalDifferenceCalculator("Camarões", GroupG_Clashes),
    },
    {
      id: "Suiça",
      points: pointsCalculator("Suiça", GroupG_Clashes),
      goalDifference: goalDifferenceCalculator("Suiça", GroupG_Clashes),
    },
    {
      id: "Sérvia",
      points: pointsCalculator("Sérvia", GroupG_Clashes),
      goalDifference: goalDifferenceCalculator("Sérvia", GroupG_Clashes),
    },
  ],
  clashes: GroupG_Clashes,
};