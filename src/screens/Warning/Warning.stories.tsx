import { Warning } from ".";
import type { Meta } from "@storybook/react";
import "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
  title: "Screens/Warning",
  component: Warning,
  decorators: [
    (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const Default = {};
