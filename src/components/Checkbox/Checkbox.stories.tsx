import type { Meta, StoryObj } from '@storybook/react';

import CheckboxWithText from './Checkbox';

const meta: Meta<typeof CheckboxWithText> = {
  component: CheckboxWithText,
};

export default meta;
type Story = StoryObj<typeof CheckboxWithText>;

export const Default: Story = {};