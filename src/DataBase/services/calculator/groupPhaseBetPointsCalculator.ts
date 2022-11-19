import { ActionsActivator } from "./../../../WorldCupData/ActionsActivator";
import { GroupDataType } from "../../../@types/GroupData";
import { WorldCupGroupsData } from "../../../WorldCupData/WorldCupGroupsData";

export async function groupPhaseBetPointsCalculator(
  betGroupsData: GroupDataType[]
) {
  let betPoints = 0;

  if (ActionsActivator.startGroupPhase === true) {
    WorldCupGroupsData.forEach((group) => {
      group.clashes.forEach((clash) => {
        betGroupsData.forEach((betGroup) => {
          betGroup.clashes.forEach((betClash) => {
            if (
              clash.teamA === betClash.teamA &&
              clash.teamB === betClash.teamB
            ) {
              if (
                clash.scoreTeamA === betClash.scoreTeamA &&
                clash.scoreTeamB === betClash.scoreTeamB
              ) {
                betPoints += 2;
              } else if (
                (betClash.scoreTeamA > betClash.scoreTeamB &&
                  clash.scoreTeamA > clash.scoreTeamB) ||
                (betClash.scoreTeamA < betClash.scoreTeamB &&
                  clash.scoreTeamA < clash.scoreTeamB)
              ) {
                betPoints += 1;
              } else if (
                betClash.scoreTeamA === betClash.scoreTeamB &&
                clash.scoreTeamA === clash.scoreTeamB &&
                clash.scoreTeamA !== betClash.scoreTeamA
              ) {
                betPoints += 1;
              }
            }
          });
        });
      });
    });
  }
  return betPoints;
}
