import { Container, Flag } from "./styles";
import { TeamsFlag } from "../../WorldCupData/Flags/TeamsFlag";

type Props = {
  teamName: string;
};

export function FlagBox({ teamName }: Props) {
  return (
    <Container>
      {TeamsFlag.map((item) => {
        if (teamName === item.id)
          return <Flag key={item.id} image={item.flag} />;
      })}
    </Container>
  );
}
