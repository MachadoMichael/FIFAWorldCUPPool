import { ThemeProvider } from "styled-components";
import { RoutesConfig } from "./routes/routes";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesConfig></RoutesConfig>
    </ThemeProvider>
  );
}

export default App;
