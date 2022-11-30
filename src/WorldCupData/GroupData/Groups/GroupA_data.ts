import { pointsCalculator } from "../pointsCalculator";
import { goalDifferenceCalculator } from "../goalDifferenceCalculator";
import { GroupDataType, GroupGameType } from "../../../@types/GroupData";

export const GroupA_Clashes: GroupGameType[] = [
  {
    teamA: "Catar",
    teamB: "Equador",
    scoreTeamA: 0,
    scoreTeamB: 2,
    concluded: true,
  },
  {
    teamA: "Senegal",
    teamB: "Holanda",
    scoreTeamA: 0,
    scoreTeamB: 2,
    concluded: true,
  },
  {
    teamA: "Catar",
    teamB: "Senegal",
    scoreTeamA: 1,
    scoreTeamB: 3,
    concluded: true,
  },
  {
    teamA: "Holanda",
    teamB: "Equador",
    scoreTeamA: 1,
    scoreTeamB: 1,
    concluded: true,
  },
  {
    teamA: "Holanda",
    teamB: "Catar",
    scoreTeamA: 2,
    scoreTeamB: 0,
    concluded: true,
  },
  {
    teamA: "Equador",
    teamB: "Senegal",
    scoreTeamA: 1,
    scoreTeamB: 2,
    concluded: true,
  },
];

export const GroupA_data: GroupDataType = {
  name: "GroupA",
  teams: [
    {
      id: "Catar",
      points: pointsCalculator("Catar", GroupA_Clashes),
      goalDifference: goalDifferenceCalculator("Catar", GroupA_Clashes),
    },
    {
      id: "Equador",
      points: pointsCalculator("Equador", GroupA_Clashes),
      goalDifference: goalDifferenceCalculator("Equador", GroupA_Clashes),
    },
    {
      id: "Senegal",
      points: pointsCalculator("Senegal", GroupA_Clashes),
      goalDifference: goalDifferenceCalculator("Senegal", GroupA_Clashes),
    },
    {
      id: "Holanda",
      points: pointsCalculator("Holanda", GroupA_Clashes),
      goalDifference: goalDifferenceCalculator("Holanda", GroupA_Clashes),
    },
  ],
  clashes: GroupA_Clashes,
};
