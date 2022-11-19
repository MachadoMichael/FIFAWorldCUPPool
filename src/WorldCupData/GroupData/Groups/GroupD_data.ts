import { pointsCalculator } from "../pointsCalculator";
import { GroupDataType, GroupGameType } from "../../../@types/GroupData";
import { goalDifferenceCalculator } from "../goalDifferenceCalculator";

export const GroupD_Clashes: GroupGameType[] = [
  {
    teamA: "Dinamarca",
    teamB: "Tunísia",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "França",
    teamB: "Austrália",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Tunísia",
    teamB: "Austrália",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "França",
    teamB: "Dinamarca",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Tunísia",
    teamB: "França",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Austrália",
    teamB: "Dinamarca",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
];

export const GroupD_data: GroupDataType = {
  name: "GroupD",
  teams: [
    {
      id: "Austrália",
      points: pointsCalculator("Austrália", GroupD_Clashes),
      goalDifference: goalDifferenceCalculator("Austrália", GroupD_Clashes),
    },
    {
      id: "Dinamarca",
      points: pointsCalculator("Dinamarca", GroupD_Clashes),
      goalDifference: goalDifferenceCalculator("Dinamarca", GroupD_Clashes),
    },
    {
      id: "França",
      points: pointsCalculator("França", GroupD_Clashes),
      goalDifference: goalDifferenceCalculator("França", GroupD_Clashes),
    },
    {
      id: "Tunísia",
      points: pointsCalculator("Tunísia", GroupD_Clashes),
      goalDifference: goalDifferenceCalculator("Tunísia", GroupD_Clashes),
    },
  ],
  clashes: GroupD_Clashes,
};
