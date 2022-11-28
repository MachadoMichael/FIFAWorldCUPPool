import { pointsCalculator } from "../pointsCalculator";
import { GroupDataType, GroupGameType } from "../../../@types/GroupData";
import { goalDifferenceCalculator } from "../goalDifferenceCalculator";

export const GroupE_Clashes: GroupGameType[] = [
  {
    teamA: "Alemanha",
    teamB: "Japão",
    scoreTeamA: 1,
    scoreTeamB: 2,
    concluded: true,
  },
  {
    teamA: "Espanha",
    teamB: "Costa Rica",
    scoreTeamA: 7,
    scoreTeamB: 0,
    concluded: true,
  },
  {
    teamA: "Japão",
    teamB: "Costa Rica",
    scoreTeamA: 0,
    scoreTeamB: 1,
    concluded: false,
  },
  {
    teamA: "Espanha",
    teamB: "Alemanha",
    scoreTeamA: 1,
    scoreTeamB: 1,
    concluded: false,
  },
  {
    teamA: "Japão",
    teamB: "Espanha",
    scoreTeamA: 0,
    scoreTeamB: 0,
    concluded: false,
  },
  {
    teamA: "Costa Rica",
    teamB: "Alemanha",
    scoreTeamA: 0,
    scoreTeamB: 0,
    concluded: false,
  },
];

export const GroupE_data: GroupDataType = {
  name: "GroupE",
  teams: [
    {
      id: "Alemanha",
      points: pointsCalculator("Alemanha", GroupE_Clashes),
      goalDifference: goalDifferenceCalculator("Alemanha", GroupE_Clashes),
    },
    {
      id: "Costa Rica",
      points: pointsCalculator("Costa Rica", GroupE_Clashes),
      goalDifference: goalDifferenceCalculator("Costa Rica", GroupE_Clashes),
    },
    {
      id: "Espanha",
      points: pointsCalculator("Espanha", GroupE_Clashes),
      goalDifference: goalDifferenceCalculator("Espanha", GroupE_Clashes),
    },
    {
      id: "Japão",
      points: pointsCalculator("Japão", GroupE_Clashes),
      goalDifference: goalDifferenceCalculator("Japão", GroupE_Clashes),
    },
  ],
  clashes: GroupE_Clashes,
};
