import { Button } from "../../components/Button";
import { Teambox } from "../../components/Teambox";
import { Title } from "../../components/Title";
import { Container, GroupsInterface } from "./styles";

export function Groups() {
  return (
    <Container>
      <Title text="GRUPO X" />
      <GroupsInterface>
        <Teambox team="Brasil" points={9} />
        <Teambox team="Servia" points={5} />
        <Teambox team="Suiça" points={2} type="LIGHT" />
        <Teambox team="Camarões" points={2} type="LIGHT" />
      </GroupsInterface>
    </Container>
  );
}
