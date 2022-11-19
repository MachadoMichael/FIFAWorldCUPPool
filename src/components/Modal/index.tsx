import { Button } from "../Button";

import { Container, Message, MessageContainer } from "./styles";

type ModalType = {
  message: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Modal({ message, setShowModal }: ModalType) {
  return (
    <Container>
      <MessageContainer>
        <Message>{message}</Message>
      </MessageContainer>
      <Button
        butttonFunction={() => setShowModal(false)}
        type="LIGHT"
        text="OK"
      />
    </Container>
  );
}
