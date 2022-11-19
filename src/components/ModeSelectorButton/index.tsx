import { Container, ButtonSelectMode } from "./styles";

type ModeSelectorButtonType = {
  showResultMode: boolean;
  setShowResultsMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ModeSelectorButton({
  showResultMode,
  setShowResultsMode,
}: ModeSelectorButtonType) {
  return (
    <Container>
      <ButtonSelectMode
        onClick={() =>
          setShowResultsMode(showResultMode === true ? false : true)
        }
      >
        {showResultMode === true ? "Palpites" : "Resultados"}
      </ButtonSelectMode>
    </Container>
  );
}
