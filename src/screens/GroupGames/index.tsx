import { AllRoundsGroup } from "../../components/AllRoundsGroup";
import { Button } from "../../components/Button";
import { Container, GamesInterface } from "./styles";

export function GroupGames() {
  return (
    <Container>
      <GamesInterface>
        <AllRoundsGroup />
      </GamesInterface>
      <Button type="LIGHT" text="ENVIAR" />
    </Container>
  );
}
