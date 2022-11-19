import { Container, ButtonSelectData } from "./styles";

import { useState } from "react";

type DataSelectorButtonType = {
  selectedData: string;
  setSelectedData: React.Dispatch<React.SetStateAction<string>>;
  data: string[];
};

export function DataSelectorButton({
  selectedData,
  setSelectedData,
  data,
}: DataSelectorButtonType) {
  const [selectorOpen, setSelectorOpen] = useState(false);

  function changeDataTarget(data: string) {
    setSelectedData(data);
    setSelectorOpen(false);
  }
  return (
    <Container>
      <>
        {selectorOpen === true ? (
          data.map((item) => {
            return (
              <ButtonSelectData
                key={item}
                onClick={() => changeDataTarget(item)}
              >
                {item}
              </ButtonSelectData>
            );
          })
        ) : (
          <ButtonSelectData onClick={() => setSelectorOpen(true)}>
            {selectedData}
          </ButtonSelectData>
        )}
      </>
    </Container>
  );
}
