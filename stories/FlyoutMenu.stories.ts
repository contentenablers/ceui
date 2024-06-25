import type { Meta, StoryObj } from '@storybook/react';
import { FlyoutMenu } from '../lib/common';

const meta = {
    title: 'Common/FlyoutMenu',
    component: FlyoutMenu,
    tags: ['autodocs'],
    parameters: { layout: 'centered' },
} satisfies Meta<typeof FlyoutMenu>;



export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        ctas: [
            { name: 'Team', href: '#', },
            { name: 'Projects', href: '#' },
        ],
        menuitems: [
            { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
            { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
            { name: 'Security', description: "Your customers' data will be safe and secure", href: '#' },
            { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
            { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
        ]
    },
};

