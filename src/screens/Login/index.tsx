import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, LoginInterface, NewUser } from "./styles";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <LoginInterface>
        <Input icon="user" placeholder="usuário" />
        <Input icon="password" placeholder="senha" password />
        <Button text="ENTRAR" />
        <NewUser onClick={() => navigate("register")}>NOVO USUÁRIO</NewUser>
      </LoginInterface>
    </Container>
  );
}
