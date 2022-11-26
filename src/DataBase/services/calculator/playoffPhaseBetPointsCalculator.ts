import { PlayoffsPhaseData } from "../../../@types/PlayoffsData";
import { WorldCupPlayoffsData } from "../../../WorldCupData/WorldCupPlayoffsData";
import { ActionsActivator } from "../../../WorldCupData/ActionsActivator";

export async function playoffPhaseBetPointsCalculator(
  betPlayoffData: PlayoffsPhaseData[]
) {
  let betPoints = 0;

  WorldCupPlayoffsData.forEach((phase, index) => {
    switch (phase.phaseName) {
      case "Round16":
        if (ActionsActivator.startRound16 === true)
          betPoints += phaseBetPoints(phase, betPlayoffData[index]);
        break;
      case "Quarterfinals":
        if (ActionsActivator.startQuarterfinals === true)
          betPoints += phaseBetPoints(phase, betPlayoffData[index]);
        break;
      case "Semifinals":
        if (ActionsActivator.startSemifinals === true)
          betPoints += phaseBetPoints(phase, betPlayoffData[index]);
        break;
      case "Final":
        if (ActionsActivator.startFinal === true)
          betPoints += phaseBetPoints(phase, betPlayoffData[index]);
        break;

      default:
        break;
    }
  });

  return betPoints;
}

function phaseBetPoints(phase: PlayoffsPhaseData, betPhase: PlayoffsPhaseData) {
  let phaseBetPoints = 0;

  phase.clashes.forEach((clash, index) => {
    if (clash.concluded === true) {
      if (
        clash.teamA === betPhase.clashes[index].teamA &&
        clash.teamB === betPhase.clashes[index].teamB
      ) {
        if (
          clash.scoreTeamA === betPhase.clashes[index].scoreTeamA &&
          clash.scoreTeamB === betPhase.clashes[index].scoreTeamB
        ) {
          phaseBetPoints += 2;
        } else if (
          (betPhase.clashes[index].scoreTeamA >
            betPhase.clashes[index].scoreTeamB &&
            clash.scoreTeamA > clash.scoreTeamB) ||
          (betPhase.clashes[index].scoreTeamA <
            betPhase.clashes[index].scoreTeamB &&
            clash.scoreTeamA < clash.scoreTeamB)
        ) {
          phaseBetPoints += 1;
        } else if (
          betPhase.clashes[index].scoreTeamA ===
            betPhase.clashes[index].scoreTeamB &&
          clash.scoreTeamA === clash.scoreTeamB &&
          clash.scoreTeamA !== betPhase.clashes[index].scoreTeamA
        ) {
          phaseBetPoints += 1;
        }
      }
    }
  });
  return phaseBetPoints;
}
