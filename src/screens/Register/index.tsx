import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Container, RegisterInterface, BackLoginScreen } from "./styles";

import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { TabsButton } from "../../components/TabsButton";

import { warningRules } from "../../components/Modal/messagesForUsers";
import { passwordsDontMatch } from "../../components/Modal/messagesForUsers";
import { userNameAlreadyExist } from "../../components/Modal/messagesForUsers";
import { userCreatedWithSuccess } from "../../components/Modal/messagesForUsers";

import { registerNewUser } from "../../DataBase/services/registerNewUser";

import { LoginContext } from "../../Context/LoginContext";

export function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [heroName, setHeroName] = useState("");
  const [modalMessage, setModalMessage] = useState(warningRules);
  const [showModal, setShowModal] = useState(true);

  const navigate = useNavigate();

  const { logged } = useContext(LoginContext);

  function checkingData() {
    if (password === confirmPassword) {
      registerNewUser(userName, password, heroName).then((response) => {
        if (response === true) {
          setModalMessage(userCreatedWithSuccess);
          clearFields();

          setInterval(() => {
            navigate("/");
          }, 2000);
        } else {
          setModalMessage(userNameAlreadyExist);
        }
        setShowModal(true);
      });
    } else {
      setModalMessage(passwordsDontMatch);
      setShowModal(true);
    }
  }

  function clearFields() {
    setUserName("");
    setPassword("");
    setConfirmPassword("");
    setHeroName("");
  }

  return (
    <Container>
      {logged === true ? <TabsButton /> : false}

      <Title text="NOVO USUÁRIO" />
      <RegisterInterface>
        <Input
          state={userName}
          setState={setUserName}
          icon="user"
          placeholder="usuário"
        />
        <Input
          state={password}
          setState={setPassword}
          icon="password"
          placeholder="senha"
          password
        />
        <Input
          state={confirmPassword}
          setState={setConfirmPassword}
          icon="password"
          placeholder="confirmar senha"
          password
        />
        <Input
          state={heroName}
          setState={setHeroName}
          icon="heroName"
          placeholder="Nome de herói"
        />
        <Button
          butttonFunction={checkingData}
          type="LIGHT"
          text="CRIAR CONTA"
        />
        <BackLoginScreen onClick={() => navigate("/")}>
          VOLTA A TELA DE LOGIN
        </BackLoginScreen>
      </RegisterInterface>

      {showModal === true ? (
        <Modal message={modalMessage} setShowModal={setShowModal} />
      ) : (
        false
      )}
    </Container>
  );
}
