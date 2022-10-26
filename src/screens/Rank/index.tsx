import { Button } from "../../components/Button";
import { PlayerRankBox } from "../../components/PlayerRankBox";
import { Teambox } from "../../components/Teambox";
import { Title } from "../../components/Title";
import { Container, RankInterface } from "./styles";

export function Rank() {
  return (
    <Container>
      <Title text="RANK" />
      <RankInterface>
        <PlayerRankBox
          player="TEste"
          points={55}
          position={1}
          superpower="Quem?"
        />
        <PlayerRankBox
          player="TEste"
          points={55}
          position={1}
          superpower="Quem?"
        />
        <PlayerRankBox
          player="TEste"
          points={55}
          position={1}
          superpower="Quem?"
        />
        <PlayerRankBox
          player="TEste"
          points={55}
          position={1}
          superpower="Quem?"
        />
        <PlayerRankBox
          player="TEste"
          points={55}
          position={1}
          superpower="Quem?"
        />
        <PlayerRankBox
          player="TEste"
          points={55}
          position={1}
          superpower="Quem?"
        />
        <PlayerRankBox
          player="TEste"
          points={55}
          position={1}
          superpower="Quem?"
          type="LIGHT"
        />
      </RankInterface>
    </Container>
  );
}
