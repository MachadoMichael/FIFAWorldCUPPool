import { TextMD } from "./styles";

type Props = {
  text: string;
};

export function Title({ text }: Props) {
  return <TextMD>{text}</TextMD>;
}
