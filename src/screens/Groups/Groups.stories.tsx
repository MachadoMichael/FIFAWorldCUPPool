import { Groups } from ".";
import type { Meta } from "@storybook/react";
import "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
  title: "Screens/Groups",
  component: Groups,
  decorators: [
    (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const Default = {};
