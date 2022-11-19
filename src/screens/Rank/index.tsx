import { PlayerRankBox } from "../../components/PlayerRankBox";
import { TabsButton } from "../../components/TabsButton";
import { Title } from "../../components/Title";

import { Container, RankInterface, RankList } from "./styles";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../Context/LoginContext";

import { getUserDataForRank } from "../../DataBase/services/get/getUserDataForRank";
import { UserRankList } from "../../@types/UserRankList";

export function Rank() {
  const { userNameConnected } = useContext(LoginContext);
  const [rankOfUsersForPoints, setRankOfUsersForPoints] = useState(
    [] as UserRankList[]
  );

  useEffect(() => {
    getUserDataForRank().then((response) => {
      setRankOfUsersForPoints(response);
    });
  }, []);

  return (
    <Container>
      <TabsButton />
      <Title text="RANK" />

      <RankInterface>
        {rankOfUsersForPoints.map((user, index) => {
          if (user.userName === userNameConnected.toUpperCase()) {
            return (
              <PlayerRankBox
                key={index}
                player={user.userName}
                points={user.betPoints}
                position={index + 1}
                heroName={user.heroName}
                type="LIGHT"
              />
            );
          }
        })}
        <RankList>
          {rankOfUsersForPoints.map((user, index) => {
            return (
              <PlayerRankBox
                key={index}
                player={user.userName}
                points={user.betPoints}
                position={index + 1}
                heroName={user.heroName}
                type="RED"
              />
            );
          })}
        </RankList>
      </RankInterface>
    </Container>
  );
}
