import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, RegisterInterface } from "./styles";
import { Title } from "../../components/Title";

export function Register() {
  return (
    <Container>
      <Title text="NOVO USUÁRIO" />
      <RegisterInterface>
        <Input icon="user" placeholder="usuário" />
        <Input icon="password" placeholder="senha" password />
        <Input icon="superpower" placeholder="superpower" />
        <Button type="LIGHT" text="CRIAR CONTA" />
      </RegisterInterface>
    </Container>
  );
}
