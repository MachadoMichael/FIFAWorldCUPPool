import { UserBetsDataType } from "../../../@types/UserBetsData";
import { db } from "../../FirebaseSDK";
import { doc, getDoc } from "firebase/firestore";

export async function getUserBets(userName: string) {
  const userBetCollection = doc(db, "bets", userName);
  const userBetData = (await getDoc(userBetCollection)).data();

  return userBetData as UserBetsDataType;
}
