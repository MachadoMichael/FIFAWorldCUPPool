import { ButtonProps, Container, Text } from "./styles";

type Props = {
  type?: ButtonProps;
  text: string;
};

export function Button({ text, type = "RED" }: Props) {
  return (
    <Container type={type}>
      <Text>{text}</Text>
    </Container>
  );
}
