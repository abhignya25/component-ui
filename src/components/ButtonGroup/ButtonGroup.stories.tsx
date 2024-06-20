import type { Meta, StoryObj } from '@storybook/react';

import ButtonGroup from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
    variant: "default"
  },
};

export const Destructive: Story = {
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
    variant: "destructive"
  },
};

export const Link: Story = {
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
    variant: "link"
  },
};

export const Ghost: Story = {
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
    variant: "ghost"
  },
};

export const Outline: Story = {
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
    variant: "outline"
  },
};

export const Secondary: Story = {
  args: {
    labels: ['Button 1', 'Button 2', 'Button 3'],
    variant: "secondary"
  },
};