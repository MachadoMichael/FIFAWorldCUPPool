import { Rank } from ".";
import type { Meta } from "@storybook/react";
import "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
  title: "Screens/Rank",
  component: Rank,
  decorators: [
    (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const Default = {};
