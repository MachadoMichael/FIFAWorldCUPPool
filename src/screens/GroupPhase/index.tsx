import { Container, GamesInterface, SelectorContainer } from "./styles";

import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../../Context/LoginContext";

import { Round } from "../../components/Round";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { TabsButton } from "../../components/TabsButton";
import { betsHaveBeenSent } from "../../components/Modal/messagesForUsers";
import { DataSelectorButton } from "../../components/DataSelectorButton";
import { ModeSelectorButton } from "../../components/ModeSelectorButton";

import { WorldCupGroupsData } from "../../WorldCupData/WorldCupGroupsData";

import { getUserBets } from "../../DataBase/services/get/getUserBets";
import { updateUserBets } from "../../DataBase/services/update/updateUserBets";

import { UserBetsDataType } from "../../@types/UserBetsData";
import { Modal } from "../../components/Modal";
import { groupPhaseBetPointsCalculator } from "../../DataBase/services/calculator/groupPhaseBetPointsCalculator";
import { updateBetPoints } from "../../DataBase/services/update/updateBetPoints";

export function GroupPhase() {
  const { userNameConnected } = useContext(LoginContext);

  useEffect(() => {
    getUserBets(userNameConnected).then((data: UserBetsDataType) => {
      if (data !== undefined) {
        const userBets = data.groupsBets;
        setWorldCupDataBet(userBets);
        updateBetPoints({
          userGroupBets: userBets,
          userName: userNameConnected,
        });
      }
    });
  }, []);

  const [modalMessage, setModalMessage] = useState(betsHaveBeenSent);
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("GroupA");
  const [showResultMode, setShowResultsMode] = useState(true);
  const [worldCupDataGroupsBet, setWorldCupDataBet] =
    useState(WorldCupGroupsData);

  const stringArrayGroups = [
    "GroupA",
    "GroupB",
    "GroupC",
    "GroupD",
    "GroupE",
    "GroupF",
    "GroupG",
    "GroupH",
  ];

  return (
    <Container>
      <TabsButton />
      <SelectorContainer>
        <DataSelectorButton
          selectedData={selectedGroup}
          setSelectedData={setSelectedGroup}
          data={stringArrayGroups}
        />
        <ModeSelectorButton
          showResultMode={showResultMode}
          setShowResultsMode={setShowResultsMode}
        />
      </SelectorContainer>

      <Title text={showResultMode === true ? "Resultados" : "Palpites"} />
      <GamesInterface>
        {showResultMode === true
          ? WorldCupGroupsData.map((groupRoundsData, index) => {
              if (groupRoundsData.name === selectedGroup) {
                return (
                  <Round
                    mode="result"
                    key={index}
                    roundData={groupRoundsData}
                  />
                );
              }
            })
          : worldCupDataGroupsBet.map((groupRoundsData, index) => {
              if (groupRoundsData.name === selectedGroup) {
                return (
                  <Round mode="bet" key={index} roundData={groupRoundsData} />
                );
              }
            })}
      </GamesInterface>

      {showResultMode === false ? (
        <Button
          type="LIGHT"
          text="ENVIAR PALPITES"
          butttonFunction={() => {
            updateUserBets({
              userName: userNameConnected,
              userGroupBets: worldCupDataGroupsBet,
            }).then((response) => {
              setShowModal(response);
            });
          }}
        />
      ) : (
        false
      )}

      {showModal === true ? (
        <Modal message={modalMessage} setShowModal={setShowModal} />
      ) : (
        false
      )}
    </Container>
  );
}
