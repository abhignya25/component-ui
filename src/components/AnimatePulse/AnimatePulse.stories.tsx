import type { Meta, StoryObj } from '@storybook/react';

import AnimatePulse from './AnimatePulse';

const meta: Meta<typeof AnimatePulse> = {
  component: AnimatePulse,
};

export default meta;
type Story = StoryObj<typeof AnimatePulse>;

export const Default: Story = {};
