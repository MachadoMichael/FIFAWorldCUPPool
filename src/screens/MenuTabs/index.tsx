import { Button } from "../../components/Button";
import { TabsButton } from "../../components/TabsButton";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { info } from "../../components/Modal/messagesForUsers";

export function MenuTabs() {
  const navigate = useNavigate();

  const [modalMessage, setModalMessage] = useState(info);
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <TabsButton />
      <Button butttonFunction={() => navigate("/")} text="INICIO" />
      <Button butttonFunction={() => navigate("/rank")} text="RANK" />
      <Button butttonFunction={() => navigate("/groups")} text="GRUPOS" />
      <Button
        butttonFunction={() => navigate("/groupgames")}
        text="PARTIDAS DE GRUPO"
      />
      <Button butttonFunction={() => navigate("/playoffs")} text="MATA-MATA" />
      <Button butttonFunction={() => setShowModal(true)} text="INFORMAÇÕES" />

      {showModal === true ? (
        <Modal message={modalMessage} setShowModal={setShowModal} />
      ) : (
        false
      )}
    </Container>
  );
}
