import { pointsCalculator } from "../pointsCalculator";
import { goalDifferenceCalculator } from "../goalDifferenceCalculator";
import { GroupDataType, GroupGameType } from "../../../@types/GroupData";

export const GroupA_Clashes: GroupGameType[] = [
  {
    teamA: "Catar",
    teamB: "Equador",
    scoreTeamA: 0,
    scoreTeamB: 2,
  },
  {
    teamA: "Senegal",
    teamB: "Holanda",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Catar",
    teamB: "Senegal",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Holanda",
    teamB: "Equador",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Holanda",
    teamB: "Catar",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Equador",
    teamB: "Senegal",
    scoreTeamA: 0,
    scoreTeamB: 0,
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
