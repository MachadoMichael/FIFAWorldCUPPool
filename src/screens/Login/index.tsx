import { useState, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { TabsButton } from "../../components/TabsButton";

import { userDontExist } from "../../components/Modal/messagesForUsers";
import { passwordIncorrect } from "../../components/Modal/messagesForUsers";

import { userValidation } from "../../DataBase/services/userValidation";
import { Container, LoginInterface, NewUser } from "./styles";

export function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { logged, setLogged, setUserNameConnected, userNameConnected } =
    useContext(LoginContext);

  const navigate = useNavigate();

  function tryLogin() {
    userValidation(userName, password).then((response) => {
      switch (response) {
        case "validatedUser":
          setUserNameConnected(userName);
          setLogged(true);
          localStorage.setItem("login", JSON.stringify({ userName: userName }));
          break;
        case "passwordIncorrect":
          setModalMessage(passwordIncorrect);
          setShowModal(true);
          break;
        case "nonExistThisUser":
          setModalMessage(userDontExist);
          setShowModal(true);
          break;

        default:
          break;
      }
    });
  }

  return (
    <Container>
      {logged === true ? <TabsButton /> : false}

      <LoginInterface>
        {logged === false ? (
          <>
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
            <Button text="ENTRAR" butttonFunction={tryLogin} />
            <NewUser onClick={() => navigate("register")}>NOVO USUÁRIO</NewUser>
          </>
        ) : (
          <>
            <Button
              text="Desconectar"
              butttonFunction={() => {
                setLogged(false);
                setUserNameConnected("");
                localStorage.clear();
              }}
            />
            <Button
            type="LIGHT"
              text="Menu"
              butttonFunction={() => {
                navigate("/menutabs");
              }}
            />
          </>
        )}
      </LoginInterface>

      {showModal === true ? (
        <Modal message={modalMessage} setShowModal={setShowModal} />
      ) : (
        false
      )}
    </Container>
  );
}
