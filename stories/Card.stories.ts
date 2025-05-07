import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../lib/common';

const meta: Meta<typeof Card> = {
    title: 'Common/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { title: "Here it is", image: "https://picsum.photos/200/300", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus odio vel sem ullamcorper, et maximus leo semper. Donec tincidunt nisi interdum sem bibendum" },
};



