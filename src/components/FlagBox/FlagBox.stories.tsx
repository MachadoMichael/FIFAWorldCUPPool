import { FlagBox } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default {
  title: "Components/FlagBox",
  component: FlagBox,
  decorators: [
    (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const Default = {};
