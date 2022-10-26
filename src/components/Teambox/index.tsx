import { Container, Text, Section, TeamboxStyleProps } from "./styles";
import { Flag } from "phosphor-react";

type Props = {
  team: string;
  points: number;
  type?: TeamboxStyleProps;
};

export function Teambox({ team, points, type = "DARK" }: Props) {
  return (
    <Container type={type}>
      <Flag />
      <Section>
        <Text>{team}</Text>
      </Section>

      <Text>{points}</Text>
    </Container>
  );
}
