import type { Meta, StoryObj } from '@storybook/react';
import { CTA } from '../lib/common';
import { userEvent, within } from '@storybook/test';


const meta = {
  title: 'Common/CTA',
  component: CTA,
  tags: ['autodocs'],
  argTypes:{
    onClick:{action:'Loggedin'}
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  
};
