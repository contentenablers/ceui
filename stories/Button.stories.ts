import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../lib/common';
import { userEvent, within } from '@storybook/test';


const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes:{
    onClick:{action:'Loggedin'}
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Click Me' },
  play:async({canvasElement}) =>{
    const canvas = within(canvasElement);
    const btn = await canvas.getByRole('button',{name:/Click Me/i})
    await userEvent.click(btn)
  }
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Click Me' },
};

 