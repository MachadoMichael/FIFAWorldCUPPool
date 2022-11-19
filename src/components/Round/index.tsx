import { Container } from "./styles";

import { GroupDataType } from "../../@types/GroupData";
import { Match } from "../Match";
import { PlayoffsPhaseData } from "../../@types/PlayoffsData";

type Props = {
  roundData: GroupDataType | PlayoffsPhaseData;
  mode: string;
};

export function Round({ roundData, mode }: Props) {
  return (
    <Container>
      {roundData.clashes.map((selectedGame, index) => {
        return <Match mode={mode} key={index} game={selectedGame} />;
      })}
    </Container>
  );
}
