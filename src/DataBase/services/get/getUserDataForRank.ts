import { UserRankList } from "../../../@types/UserRankList";
import { getUsersBetPoints } from "./getUsersBetPoints";
import { getUsersData } from "./getUsersData";

export async function getUserDataForRank() {
  const userBetPointsList = getUsersBetPoints();
  const usersListPromise = getUsersData();
  const usersRankList: UserRankList[] = [];

  await usersListPromise.then((usersList) => {
    usersList.forEach((userData) => {
      userBetPointsList.then((betPointsList) => {
        betPointsList.forEach((userBetPointsData) => {
          if (userData.userName === userBetPointsData.userName) {
            usersRankList.push({
              userName: userData.userName,
              heroName: userData.heroName,
              betPoints: userBetPointsData.betPoints,
            } as UserRankList);
          }
        });
      });
    });
  });

  let usersRankListOrdered = usersRankList.sort(
    (teamX, teamY) => teamY.betPoints - teamX.betPoints
  );

  return usersRankListOrdered;
}
