import "./styles";
import { Modal } from ".";
import theme from "../../theme";
import type { Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

export default {
  title: "Screens/Modal",
  component: Modal,
  decorators: [
    (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
  ],
} as Meta;

export const Default = {};
