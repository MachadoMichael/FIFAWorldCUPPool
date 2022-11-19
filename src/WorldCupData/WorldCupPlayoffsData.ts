import { Round16_Data } from "./PlayoffsData/Round16/Round16_Data";
import { Quarterfinals_Data } from "./PlayoffsData/Quarterfinals/Quarterfinals_Data";
import { Final_Data } from "./PlayoffsData/Final/Final_Data";
import { Semifinals_Data } from "./PlayoffsData/Semifinal/Semifinals_Data";

import { PlayoffsPhaseData } from "../@types/PlayoffsData";

export const WorldCupPlayoffsData = [
  Round16_Data,
  Quarterfinals_Data,
  Semifinals_Data,
  Final_Data,
] as PlayoffsPhaseData[];
         