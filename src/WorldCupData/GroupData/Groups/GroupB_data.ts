import { pointsCalculator } from "../pointsCalculator";
import { GroupDataType, GroupGameType } from "../../../@types/GroupData";
import { goalDifferenceCalculator } from "../goalDifferenceCalculator";

export const GroupB_Clashes: GroupGameType[] = [
  {
    teamA: "Inglaterra",
    teamB: "Irã",
    scoreTeamA: 6,
    scoreTeamB: 2,
    concluded: true,
  },
  {
    teamA: "Estados Unidos",
    teamB: "País de Gales",
    scoreTeamA: 1,
    scoreTeamB: 1,
    concluded: true,
  },
  {
    teamA: "País de Gales",
    teamB: "Irã",
    scoreTeamA: 0,
    scoreTeamB: 2,
    concluded: true,
  },
  {
    teamA: "Inglaterra",
    teamB: "Estados Unidos",
    scoreTeamA: 0,
    scoreTeamB: 0,
    concluded: true,
  },
  {
    teamA: "Irã",
    teamB: "Estados Unidos",
    scoreTeamA: 0,
    scoreTeamB: 0,
    concluded: false,
  },
  {
    teamA: "País de Gales",
    teamB: "Inglaterra",
    scoreTeamA: 0,
    scoreTeamB: 0,
    concluded: false,
  },
];

export const GroupB_data: GroupDataType = {
  name: "GroupB",
  teams: [
    {
      id: "Estados Unidos",
      points: pointsCalculator("Estados Unidos", GroupB_Clashes),
      goalDifference: goalDifferenceCalculator("Estados Unidos", GroupB_Clashes),
    },
    {
      id: "Inglaterra",
      points: pointsCalculator("Inglaterra", GroupB_Clashes),
      goalDifference: goalDifferenceCalculator("Inglaterra", GroupB_Clashes),
    },
    {
      id: "Irã",
      points: pointsCalculator("Irã", GroupB_Clashes),
      goalDifference: goalDifferenceCalculator("Irã", GroupB_Clashes),
    },
    {
      id: "País de Gales",
      points: pointsCalculator("País de Gales", GroupB_Clashes),
      goalDifference: goalDifferenceCalculator("País de Gales", GroupB_Clashes),
    },
  ],
  clashes: GroupB_Clashes,
};
