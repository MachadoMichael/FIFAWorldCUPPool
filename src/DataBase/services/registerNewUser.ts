import { db } from "../FirebaseSDK";
import { doc, setDoc } from "firebase/firestore";
import { userValidation } from "./userValidation";
import { createUserBets } from "./create/createUserBets";

import { WorldCupGroupsData } from "../../WorldCupData/WorldCupGroupsData";
import { WorldCupPlayoffsData } from "../../WorldCupData/WorldCupPlayoffsData";
import { UserDataType } from "../../@types/UserData";

export async function registerNewUser(
  userName: string,
  password: string,
  heroName: string
) {
  return userValidation(userName, password).then((ValidationResponse) => {
    switch (ValidationResponse) {
      case "nonExistThisUser":
        createNewUser(userName, password, heroName);
        return true;
      case "passwordIncorrect":
        return false;
      case "  validatedUser":
        return false;
    }
  });
}

async function createNewUser(
  userName: string,
  password: string,
  heroName: string
) {
  const WorldCupGroupsDataDeepCopy = JSON.parse(
    JSON.stringify(WorldCupGroupsData)
  );

  const WorldCupPlayoffsDataDeepCopy = JSON.parse(
    JSON.stringify(WorldCupPlayoffsData)
  );

  try {
    await setDoc(doc(db, "users", userName), {
      userName: userName.toUpperCase(),
      password: password,
      heroName: heroName,
    } as UserDataType);
    createUserBets(
      userName,
      WorldCupGroupsDataDeepCopy,
      WorldCupPlayoffsDataDeepCopy
    );
  } catch (error) {
    console.log(error);
  }
}
