import { Container, Text, Section, PlayerRankBoxProps } from "./styles";

type Props = {
  player: string;
  heroName: string;
  points: number;
  position: number;
  type?: PlayerRankBoxProps;
};

export function PlayerRankBox({
  player,
  heroName,
  points,
  position,
  type = "RED",
}: Props) {
  return (
    <Container type={type}>
      <Text>{position}</Text>
      <Section>
        <Text>{player}</Text>
        <Text>{heroName}</Text>
      </Section>

      <Text>{points}</Text>
    </Container>
  );
}
