import { WorldCupGroupsData } from "../../WorldCupGroupsData";
import { ActionsActivator } from "../../ActionsActivator";

export function getTeamsClassified(groupName: string, position: number) {
  let teamName = "";

  if (ActionsActivator.startRound16 === true) {
    WorldCupGroupsData.map((group) => {
      if (group.name === groupName) {
        const groupOrderForPoints = group.teams.sort((x, y) => {
          if (y.points === x.points) {
            return y.goalDifference - x.goalDifference;
          } else {
            return y.points - x.points;
          }
        });
        teamName = groupOrderForPoints[position].id;
      }
    });
  }
  return teamName;
}
