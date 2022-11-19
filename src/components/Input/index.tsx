import { Container, InputText, IconContainer } from "./styles";
import { User, Password, Lightning } from "phosphor-react";
import { useTheme } from "styled-components";

type Props = {
  placeholder: string;
  icon: string;
  password?: true;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export function Input({ placeholder, icon, password, state, setState }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <IconContainer>
        {icon === "user" ? <User size={18} color={COLORS.WHITE_300} /> : false}

        {icon === "password" ? (
          <Password size={18} color={COLORS.WHITE_300} />
        ) : (
          false
        )}
        {icon === "heroName" ? (
          <Lightning size={18} color={COLORS.WHITE_300} />
        ) : (
          false
        )}
      </IconContainer>
      <InputText
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={password ? "password" : "text"}
        placeholder={placeholder}
      ></InputText>
    </Container>
  );
}
