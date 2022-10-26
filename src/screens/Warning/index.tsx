import { Button } from "../../components/Button";
import { Container, Message, WarningBox } from "./styles";
import { useNavigate } from "react-router-dom";

export function Warning() {
  const navigate = useNavigate();
  return (
    <Container>
      <WarningBox>
        <Message>
          O CAMPO SUPER PODER FOI CRIADO PARA VOCÊ EXPLORAR SUA CRIATIVIDADE E
          DEFINIR QUE SUPER HERÓI DA ADVINHAÇÃO VOCÊ É.
          <br />
          <br />
          LEMBRE-SE QUE ESTE CAMPO IRÁ FICAR VISÍVEL PARA TODOS NO RANK. ENTÃO
          PEDIMOS ENCARENCIDAMENTE QUE RESPEITEM TODAS AS CRENÇAS, RELIGIÕES OU
          A FALTA DELAS. E QUANDO DIZEMOS RESPEITAR, LEIA-SE, BRINCAR SEM
          OFENDER.
          <br />
          <br />
          A SEGUIR ALGUNS EXEMPLOS :
          <br />
          <br />
          SHAMAN, BUZIOS PLAYER, MENTALISTA CHARLATÃO, KARDEC, PASTOR
          METRALHADORA, O PROFETA, DOCTOR ESQUISITO, DAYTRADER, REI DA BET,
          CIGANO, TRAGO A VITORIA EM 3 DIAS.
        </Message>
      </WarningBox>
      <Button type="LIGHT" text="CRIAR CONTA" />
    </Container>
  );
}
