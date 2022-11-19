import { ButtonProps, Container, Text } from "./styles";

type Props = {
  type?: ButtonProps;
  text: string;
  butttonFunction?: () => void;
};

export function Button({ text, type = "RED", butttonFunction }: Props) {
  return butttonFunction ? (
    <Container type={type} onClick={butttonFunction}>
      <Text>{text}</Text>
    </Container>
  ) : (
    <Container type={type}>
      <Text>{text}</Text>
    </Container>
  );
}
