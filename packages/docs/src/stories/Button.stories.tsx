
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@portal-ui/react'
export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>
export const Primary: StoryObj<ButtonProps> = {}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}