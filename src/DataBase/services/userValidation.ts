import { db } from "../FirebaseSDK";
import { doc, getDoc } from "firebase/firestore";

export async function userValidation(userName: string, password: string) {
  const usersCollection = doc(db, "users", userName);
  const userRegistered = await getDoc(usersCollection);
  let validationResponse = "";

  if (userRegistered.exists()) {
    if (
      userRegistered.data().userName.toUpperCase() === userName.toUpperCase() &&
      userRegistered.data().password === password
    ) {
      console.log("validatedUser");
      validationResponse = "validatedUser";
    } else {
      console.log("passwordIncorrect");
      validationResponse = "passwordIncorrect";
    }

    return validationResponse;
  } else {
    validationResponse = "nonExistThisUser";
    return validationResponse;
  }
}
