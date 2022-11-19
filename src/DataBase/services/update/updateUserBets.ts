import { GroupDataType } from "../../../@types/GroupData";
import { PlayoffsPhaseData } from "../../../@types/PlayoffsData";
import { db } from "../../FirebaseSDK";

import { doc, updateDoc } from "firebase/firestore";
import { updateBetPoints } from "./updateBetPoints";

type UpdateUserBetsType = {
  userName: string;
  userGroupBets?: GroupDataType[];
  userPlayoffsBets?: PlayoffsPhaseData[];
};

export async function updateUserBets({
  userName,
  userGroupBets,
  userPlayoffsBets,
}: UpdateUserBetsType) {
  const updatedDoc = doc(db, "bets", userName);

  if (userGroupBets && userGroupBets !== undefined) {
    await updateDoc(updatedDoc, {
      groupsBets: userGroupBets,
    });

    updateBetPoints({
      userGroupBets: userGroupBets,
      userName: userName,
    });
  } else if (userPlayoffsBets && userPlayoffsBets !== undefined) {
    await updateDoc(updatedDoc, {
      playoffsBets: userPlayoffsBets,
    });

    updateBetPoints({
      userPlayoffsBets: userPlayoffsBets,
      userName: userName,
    });
  }
}
