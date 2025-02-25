
import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@portal-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Box testing</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}