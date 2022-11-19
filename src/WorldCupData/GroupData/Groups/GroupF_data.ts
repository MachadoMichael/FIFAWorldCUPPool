import { pointsCalculator } from "../pointsCalculator";
import { GroupDataType, GroupGameType } from "../../../@types/GroupData";
import { goalDifferenceCalculator } from "../goalDifferenceCalculator";

export const GroupF_Clashes: GroupGameType[] = [
  {
    teamA: "Marrocos",
    teamB: "Croácia",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Bélgica",
    teamB: "Canada",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Bélgica",
    teamB: "Marrocos",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Croácia",
    teamB: "Canada",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Croácia",
    teamB: "Bélgica",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Canada",
    teamB: "Marrocos",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
];

export const GroupF_data: GroupDataType = {
  name: "GroupF",
  teams: [
    {
      id: "Bélgica",
      points: pointsCalculator("Bélgica", GroupF_Clashes),
      goalDifference: goalDifferenceCalculator("Bélgica", GroupF_Clashes),
    },
    {
      id: "Canada",
      points: pointsCalculator("Canada", GroupF_Clashes),
      goalDifference: goalDifferenceCalculator("Canada", GroupF_Clashes),
    },
    {
      id: "Croácia",
      points: pointsCalculator("Croácia", GroupF_Clashes),
      goalDifference: goalDifferenceCalculator("Croácia", GroupF_Clashes),
    },
    {
      id: "Marrocos",
      points: pointsCalculator("Marrocos", GroupF_Clashes),
      goalDifference: goalDifferenceCalculator("Marrocos", GroupF_Clashes),
    },
  ],
  clashes: GroupF_Clashes,
};
