import { GroupGameType } from "../../@types/GroupData";
import { ActionsActivator } from "../ActionsActivator";

export function pointsCalculator(team: string, clashes: GroupGameType[]) {
  let teamPoints = 0;

  if (ActionsActivator.startGroupPhase === true) {
    clashes.map((Game) => {
      if (team === Game.teamA) {
        if (Game.scoreTeamA > Game.scoreTeamB) {
          teamPoints += 3;
        } else if (Game.scoreTeamA === Game.scoreTeamB) {
          teamPoints += 1;
        } else {
          teamPoints += 0;
        }
      } else if (team === Game.teamB) {
        if (Game.scoreTeamB > Game.scoreTeamA) {
          teamPoints += 3;
        } else if (Game.scoreTeamB === Game.scoreTeamA) {
          teamPoints += 1;
        } else {
          teamPoints += 0;
        }
      } else {
        return teamPoints;
      }
    });
  }

  return teamPoints;
}
