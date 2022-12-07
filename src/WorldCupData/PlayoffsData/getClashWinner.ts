import { PlayoffGameType } from "../../@types/PlayoffsData";

export function getClashWinner(clash: PlayoffGameType) {
  if (clash.scoreTeamA > clash.scoreTeamB) {
    return clash.teamA;
  } else if (clash.scoreTeamA < clash.scoreTeamB) {
    return clash.teamB;
  } else if (clash.scoreTeamA === clash.scoreTeamB) {
    if (clash.penaltysTeamA > clash.penaltysTeamB) {
      return clash.teamA;
    } else {
      return clash.teamB;
    }
  }
}
