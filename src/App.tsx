import { ThemeProvider } from "styled-components";
import { RoutesConfig } from "./routes/routes";
import { LoginProvider } from "./Context/LoginContext";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginProvider>
        <RoutesConfig></RoutesConfig>
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
