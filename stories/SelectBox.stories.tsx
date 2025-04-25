import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SelectBox } from '../lib/common'; // Adjust import path as needed
import { SELECT_VARIANT } from "../lib/utils/ThemeList";

const meta: Meta<typeof SelectBox> = {
  title: 'Common/RadioSelect',
  component: SelectBox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio is checked or not.',
    },
     variant: {
          control: "select",
          options: Object.keys(SELECT_VARIANT),
          description: "Choose the button style (e.g., primary, secondary).",
      },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    checked: true,
  },
};
