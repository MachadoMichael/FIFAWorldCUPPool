import { GroupGameType } from "../../@types/GroupData";

export function goalDifferenceCalculator(team: string, clashes: GroupGameType[]) {
  let teamGoalDifference = 0;

  clashes.map((Game) => {
    if (team === Game.teamA) {
      if (Game.scoreTeamA > Game.scoreTeamB) {
        teamGoalDifference += Game.scoreTeamA - Game.scoreTeamB;
      } else if (Game.scoreTeamA === Game.scoreTeamB) {
        teamGoalDifference += 0;
      } else {
        teamGoalDifference -= Game.scoreTeamB - Game.scoreTeamA;
      }
    } else if (team === Game.teamB) {
      if (Game.scoreTeamB > Game.scoreTeamA) {
        teamGoalDifference += Game.scoreTeamB - Game.scoreTeamA;
      } else if (Game.scoreTeamB === Game.scoreTeamA) {
        teamGoalDifference += 0;
      } else {
        teamGoalDifference -= Game.scoreTeamA - Game.scoreTeamB;
      }
    } else {
      return teamGoalDifference;
    }
  });

  return teamGoalDifference;
}
