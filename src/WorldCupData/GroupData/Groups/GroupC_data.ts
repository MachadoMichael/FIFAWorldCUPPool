import { pointsCalculator } from "../pointsCalculator";
import { GroupDataType, GroupGameType } from "../../../@types/GroupData";
import { goalDifferenceCalculator } from "../goalDifferenceCalculator";

export const GroupC_Clashes: GroupGameType[] = [
  {
    teamA: "Argentina",
    teamB: "Arábia Saudita",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "México",
    teamB: "Polônia",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Polônia",
    teamB: "Arábia Saudita",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Argentina",
    teamB: "México",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Polônia",
    teamB: "Argentina",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
  {
    teamA: "Arábia Saudita",
    teamB: "México",
    scoreTeamA: 0,
    scoreTeamB: 0,
  },
];

export const GroupC_data: GroupDataType = {
  name: "GroupC",
  teams: [
    {
      id: "Argentina",
      points: pointsCalculator("Argentina", GroupC_Clashes),
      goalDifference: goalDifferenceCalculator("Argentina", GroupC_Clashes),
    },
    {
      id: "Arábia Saudita",
      points: pointsCalculator("Arábia Saudita", GroupC_Clashes),
      goalDifference: goalDifferenceCalculator(
        "Arábia Saudita",
        GroupC_Clashes
      ),
    },
    {
      id: "México",
      points: pointsCalculator("México", GroupC_Clashes),
      goalDifference: goalDifferenceCalculator("México", GroupC_Clashes),
    },
    {
      id: "Polônia",
      points: pointsCalculator("Polônia", GroupC_Clashes),
      goalDifference: goalDifferenceCalculator("Polônia", GroupC_Clashes),
    },
  ],
  clashes: GroupC_Clashes,
};
