import "./styles";
import { Playoffs } from ".";
import theme from "../../theme";
import type { Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

export default {
  title: "Screens/Playoffs",
  component: Playoffs,
  decorators: [
    (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const Default = {};
