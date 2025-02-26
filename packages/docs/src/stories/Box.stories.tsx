import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@portal-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testing Box Component with text component</Text>,
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
