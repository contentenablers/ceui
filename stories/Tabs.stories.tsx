import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Tabs from '../lib/common/Tabs';

const sampleTabs = [
  { label: 'Assigned Courses', key: 'assigned' },
  { label: 'Started', key: 'started' },
  { label: 'Pending', key: 'pending' },
  { label: 'Completed', key: 'completed' },
  { label: 'Favorite', key: 'favorite' },
  { label: 'Resources', key: 'resources' },
];

const meta: Meta<typeof Tabs> = {
  title: 'Common/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'error'],
      description: 'Theme color for the active tab.',
    },
    selectionType: {
      control: 'select',
      options: ['underline', 'circle', 'square', 'filled'],
      description: 'Type of selection indicator for the active tab.',
    },
    defaultActiveKey: {
      control: 'text',
      description: 'Default active tab key.',
    },
    onTabChange: { action: 'tab changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const PrimaryUnderline: Story = {
  args: {
    tabs: sampleTabs,
    theme: 'primary',
    selectionType: 'underline',
    defaultActiveKey: 'assigned',
    onTabChange: (newTabKey) => alert(`New tab: ${newTabKey}`),
  },
};

export const SuccessCircle: Story = {
  args: {
    tabs: sampleTabs,
    theme: 'primary',
    selectionType: 'circle',
    defaultActiveKey: 'completed',
  },
};

export const WarningSquare: Story = {
  args: {
    tabs: sampleTabs,
    theme: 'primary',
    selectionType: 'square',
    defaultActiveKey: 'pending',
  },
};

export const SecondaryCircle: Story = {
  args: {
    tabs: sampleTabs,
    theme: 'secondary',
    selectionType: 'circle',
    defaultActiveKey: 'favorite',
  },
};

export const ErrorUnderline: Story = {
  args: {
    tabs: sampleTabs,
    theme: 'error',
    selectionType: 'underline',
    defaultActiveKey: 'resources',
  },
};

export const FilledPrimary: Story = {
  args: {
    tabs: sampleTabs,
    theme: 'primary',
    selectionType: 'filled',  // New Filled Variant
    defaultActiveKey: 'assigned',
  },
};

export const FilledSecondary: Story = {
  args: {
    tabs: sampleTabs,
    theme: 'secondary',
    selectionType: 'filled',  // New Filled Variant
    defaultActiveKey: 'completed',
  },
};

export const FilledError: Story = {
  args: {
    tabs: sampleTabs,
    theme: 'error',
    selectionType: 'filled',  // New Filled Variant
    defaultActiveKey: 'resources',
  },
};
