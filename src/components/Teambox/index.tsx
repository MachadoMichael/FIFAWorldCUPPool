import { Container, Text, Section, TeamboxStyleProps, Flag } from "./styles";

import { TeamsFlag } from "../../WorldCupData/Flags/TeamsFlag";

type Props = {
  teamName: string;
  points: number;
  type?: TeamboxStyleProps;
};

export function Teambox({ teamName, points, type = "DARK" }: Props) {
  return (
    <Container type={type}>
      
      {TeamsFlag.map((item) => {
        if (teamName === item.id)
          return <Flag key={item.id} image={item.flag} />;
      })}

      <Section>
        <Text>{teamName}</Text>
      </Section>

      <Text>{points}</Text>
    </Container>
  );
}
