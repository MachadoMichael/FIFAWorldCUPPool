import { Container } from "./styles";
import { Flag } from "phosphor-react";
import { useTheme } from "styled-components";

type Props = {
  team: string;
};

export function FlagBox({ team }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Flag color={COLORS.WHITE_300} />
    </Container>
  );
}
