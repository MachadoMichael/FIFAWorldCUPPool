import { collection, getDocs } from "firebase/firestore";
import { UserDataType } from "../../../@types/UserData";
import { db } from "../../FirebaseSDK";

export async function getUsersData() {
  const usersCollection = await getDocs(collection(db, "users"));
  const usersList: UserDataType[] = [];
  usersCollection.forEach((doc) => {
    const userData = doc.data();

    usersList.push({
      userName: userData.userName,
      heroName: userData.heroName,
      password: userData.password,
    } as UserDataType);
  });
  return usersList;
}
