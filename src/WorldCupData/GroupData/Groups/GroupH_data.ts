import { pointsCalculator } from "../pointsCalculator";
import { GroupDataType, GroupGameType } from "../../../@types/GroupData";
import { goalDifferenceCalculator } from "../goalDifferenceCalculator";

export const GroupH_Clashes: GroupGameType[] = [
  {
    teamA: "Uruguai",
    teamB: "Coreia do Sul",
    scoreTeamA: 0,
    scoreTeamB: 0,
    concluded: true,
  },
  {
    teamA: "Portugal",
    teamB: "Gana",
    scoreTeamA: 3,
    scoreTeamB: 2,
    concluded: true,
  },
  {
    teamA: "Coreia do Sul",
    teamB: "Gana",
    scoreTeamA: 2,
    scoreTeamB: 3,
    concluded: true,
  },
  {
    teamA: "Portugal",
    teamB: "Uruguai",
    scoreTeamA: 2,
    scoreTeamB: 0,
    concluded: true,
  },
  {
    teamA: "Coreia do Sul",
    teamB: "Portugal",
    scoreTeamA: 2,
    scoreTeamB: 1,
    concluded: true,
  },
  {
    teamA: "Gana",
    teamB: "Uruguai",
    scoreTeamA: 0,
    scoreTeamB: 2,
    concluded: true,
  },
];

export const GroupH_data: GroupDataType = {
  name: "GroupH",
  teams: [
    {
      id: "Coreia do Sul",
      points: pointsCalculator("Coreia do Sul", GroupH_Clashes),
      goalDifference: goalDifferenceCalculator("Coreia do Sul", GroupH_Clashes),
    },
    {
      id: "Gana",
      points: pointsCalculator("Gana", GroupH_Clashes),
      goalDifference: goalDifferenceCalculator("Gana", GroupH_Clashes),
    },
    {
      id: "Portugal",
      points: pointsCalculator("Portugal", GroupH_Clashes),
      goalDifference: goalDifferenceCalculator("Portugal", GroupH_Clashes),
    },
    {
      id: "Uruguai",
      points: pointsCalculator("Uruguai", GroupH_Clashes),
      goalDifference: goalDifferenceCalculator("Uruguai", GroupH_Clashes),
    },
  ],
  clashes: GroupH_Clashes,
};
