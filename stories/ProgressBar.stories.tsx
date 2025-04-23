import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Progress from '../lib/common/Progress';

const meta: Meta<typeof Progress> = {
  title: 'Common/ProgressBar',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['bar', 'circle'] },
    value: { control: { type: 'range', min: 0, max: 100 } },
    width: { control: 'number' },
    height: { control: 'number' },
    theme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
    showLabel: { control: 'boolean' },
    animation: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const BarPrimary: Story = {
  args: {
    type: 'bar',
    value: 25,
    width: 40,
    height: 4,
    theme: 'primary',
    showLabel: true,
  },
};
export const BarPrimaryAnimation: Story = {
  args: {
    type: 'bar',
    value: 25,
    width: 40,
    height: 4,
    theme: 'primary',
    showLabel: true,
    animation:true
  },
};

export const CircleSuccess: Story = {
  args: {
    type: 'circle',
    value: 75,
    width: 50,
    theme: 'primary',
    showLabel: true,
  },
};

export const WarningBar: Story = {
  args: {
    type: 'bar',
    value: 50,
    width: 70,
    theme: 'primary',
    showLabel: true,
  },
};

export const ErrorCircle: Story = {
  args: {
    type: 'circle',
    value: 40,
    width: 40,
    theme: 'primary',
    showLabel: false,
    animation:true
  },
};
