import { Button } from "../../components/Button";
import { Match } from "../../components/Match";
import { TabsButton } from "../../components/TabsButton";
import { Title } from "../../components/Title";
import { getUserBets } from "../../DataBase/services/get/getUserBets";
import { Container, GamesInterface, SelectorContainer } from "./styles";

import { LoginContext } from "../../Context/LoginContext";
import { useContext, useEffect, useState } from "react";

import { WorldCupPlayoffsData } from "../../WorldCupData/WorldCupPlayoffsData";
import { DataSelectorButton } from "../../components/DataSelectorButton";
import { ModeSelectorButton } from "../../components/ModeSelectorButton";
import { updateUserBets } from "../../DataBase/services/update/updateUserBets";

import { Round } from "../../components/Round";
import { UserBetsDataType } from "../../@types/UserBetsData";

import { betsHaveBeenSent } from "../../components/Modal/messagesForUsers";
import { Modal } from "../../components/Modal";

export function Playoffs() {
  useEffect(() => {
    getUserBets(userNameConnected).then((data: UserBetsDataType) => {
      if (data !== undefined) {
        const userBets = data.playoffsBets;
        setWorldCupPlayoffsDataBet(userBets);
      }
    });
  }, []);

  const [modalMessage, setModalMessage] = useState(betsHaveBeenSent);
  const [showModal, setShowModal] = useState(false);
  const { userNameConnected } = useContext(LoginContext);
  const [selectedPhase, setSelectedPhase] = useState("Round16");
  const [showResultMode, setShowResultsMode] = useState(true);
  const [worldCupPlayoffsDataBet, setWorldCupPlayoffsDataBet] =
    useState(WorldCupPlayoffsData);

  const stringArrayPlayoffsPhase = [
    "Round16",
    "Quarterfinals",
    "Semifinals",
    "Final",
  ];

  return (
    <Container>
      <TabsButton />
      <SelectorContainer>
        <DataSelectorButton
          selectedData={selectedPhase}
          setSelectedData={setSelectedPhase}
          data={stringArrayPlayoffsPhase}
        />
        <ModeSelectorButton
          showResultMode={showResultMode}
          setShowResultsMode={setShowResultsMode}
        />
      </SelectorContainer>
      <Title text={showResultMode === true ? "Resultados" : "Palpites"} />
      <GamesInterface>
        {showResultMode === true
          ? WorldCupPlayoffsData.map((phaseData, index) => {
              if (phaseData.phaseName === selectedPhase) {
                return (
                  <Round roundData={phaseData} mode="result" key={index} />
                );
              }
            })
          : worldCupPlayoffsDataBet.map((phaseData, index) => {
              if (phaseData.phaseName === selectedPhase) {
                return <Round roundData={phaseData} mode="bet" key={index} />;
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
              userPlayoffsBets: WorldCupPlayoffsData,
            });
            setShowModal(true);
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
