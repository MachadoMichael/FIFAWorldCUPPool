import { db } from "../../FirebaseSDK";
import { doc, setDoc } from "firebase/firestore";

import { UserBetsDataType } from "../../../@types/UserBetsData";
import { GroupDataType } from "../../../@types/GroupData";
import { PlayoffsPhaseData } from "../../../@types/PlayoffsData";

export async function createUserBets(
  userName: string,
  groupBets: GroupDataType[],
  playoffBets: PlayoffsPhaseData[]
) {
  try {
    await setDoc(doc(db, "bets", userName), {
      userName: userName.toUpperCase(),
      groupsBets: groupBets,
      playoffsBets: playoffBets,
      groupPhaseBetPoints: 0,
      playoffPhaseBetPoints: 0,
    } as UserBetsDataType);
  } catch (error) {
    console.log(error);
  }
}
