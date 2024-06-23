import type { Meta, StoryObj } from '@storybook/react';
import { PullDownButton } from '../lib/common';

const meta = {
    title: 'Common/PullDownButton',
    component: PullDownButton,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
} satisfies Meta<typeof PullDownButton>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        list: [{ name: 'Dashboard', href: '#' },
        { name: 'Team', href: '#', },
        { name: 'Projects', href: '#' },
        { name: 'Calendar', href: '#' },
        { name: 'Reports', href: '#' },],
        image: "https://picsum.photos/200/300"
    },
};


