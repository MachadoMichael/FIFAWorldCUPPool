import { GroupDataType } from "./GroupData";
import { PlayoffsPhaseData } from "./PlayoffsData";

export type UserBetsDataType = {
  userName: string;
  groupsBets: GroupDataType[];
  playoffsBets: PlayoffsPhaseData[];
  groupPhaseBetPoints: number;
  playoffPhaseBetPoints: number;
};
