import { Container, InputText } from "./styles";
import { User, Password, Lightning } from "phosphor-react";
import { useTheme } from "styled-components";

type Props = {
  placeholder: string;
  icon: string;
  password?: true;
};

export function Input({ placeholder, icon, password }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>

      {icon === "user" ? (
      <User size={18} color={COLORS.WHITE_300} />
      ) : (
        false
      )}

      {icon === "password" ? (
        <Password size={18} color={COLORS.WHITE_300} />
      ) : (
        false
      )}
      {icon === "superpower" ? (
        <Lightning size={18} color={COLORS.WHITE_300} />
      ) : (
        false
      )}

      <InputText
        type={password ? "password" : "text"}
        placeholder={placeholder}
      ></InputText>
    </Container>
  );
}
