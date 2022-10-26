import { Container, Text, Section, PlayerRankBoxProps } from "./styles";

type Props = {
  player: string;
  superpower: string;
  points: number;
  position: number;
  type?: PlayerRankBoxProps;
};

export function PlayerRankBox({
  player,
  superpower,
  points,
  position,
  type = "RED",
}: Props) {
  return (
    <Container type={type}>
      <Text>{position}</Text>
      <Section>
        <Text>{player}</Text>
        <Text>{superpower}</Text>
      </Section>

      <Text>{points}</Text>
    </Container>
  );
}
