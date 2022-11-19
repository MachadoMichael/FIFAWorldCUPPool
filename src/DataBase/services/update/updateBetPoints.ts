import { doc, updateDoc } from "firebase/firestore";
import { GroupDataType } from "../../../@types/GroupData";
import { PlayoffsPhaseData } from "../../../@types/PlayoffsData";
import { db } from "../../FirebaseSDK";
import { groupPhaseBetPointsCalculator } from "../calculator/groupPhaseBetPointsCalculator";
import { playoffPhaseBetPointsCalculator } from "../calculator/playoffPhaseBetPointsCalculator";

type UpdateBetPointsType = {
  userGroupBets?: GroupDataType[];
  userPlayoffsBets?: PlayoffsPhaseData[];
  userName: string;
};

export function updateBetPoints({
  userGroupBets,
  userName,
  userPlayoffsBets,
}: UpdateBetPointsType) {
  if (userGroupBets && userGroupBets !== undefined) {
    groupPhaseBetPointsCalculator(userGroupBets).then((response) => {
      const updatedDoc = doc(db, "bets", userName);

      updateDoc(updatedDoc, {
        groupPhaseBetPoints: response,
      });
    });
  } else if (userPlayoffsBets && userPlayoffsBets !== undefined) {
    playoffPhaseBetPointsCalculator(userPlayoffsBets).then((response) => {
      const updatedDoc = doc(db, "bets", userName);

      updateDoc(updatedDoc, {
        playoffPhaseBetPoints: response,
      });
    });
  }
}
