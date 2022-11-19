import { collection, getDocs } from "firebase/firestore";
import { UserBetPoints } from "../../../@types/UserBetPoints";
import { db } from "../../FirebaseSDK";

export async function getUsersBetPoints() {
  const betsCollection = await getDocs(collection(db, "bets"));
  const userBetPointsList: UserBetPoints[] = [];
  betsCollection.forEach((doc) => {
    const userData = doc.data();

    userBetPointsList.push({
      userName: userData.userName,
      betPoints: userData.groupPhaseBetPoints + userData.playoffPhaseBetPoints,
    } as UserBetPoints);
  });
  return userBetPointsList;
}
