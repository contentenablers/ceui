import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../lib/common';
import Icon from '../lib/common/Icon/Icon';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar', 
  component: Navbar,  
  tags: ['autodocs'],
  parameters: {
    layout: 'fullWidth',     
    docs: {
      description: {
        component:"Navbar is a component that displays a navigation bar with logo, search bar, and actions."
      },
    },
  },
  argTypes: {
    className: {
      control: false,
      description: 'Custom CSS class to style the navbar.',
      defaultValue: '',
    },
    theme: {
      control: 'select',
      options: ['white', 'gray'],
      description: 'Navbar theme (light or dark).',
      defaultValue: 'light',
    },
    brandLogo: {
      control: 'text',
      description: 'The logo image for the navbar.',
      defaultValue: 'https://via.placeholder.com/150',
    },
    actions: {
      control: 'object',
      description: 'Array of links for the navbar.',
      defaultValue: [
        { element: '#', text: 'Home' },
        { element: '#', text: 'About' },
        { element: '#', text: 'Contact' },
      ],
    },
    searchArgs:{
      control: false,
      description: 'Props to pass to the search input component.',
    }
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const WithIcons: Story = {
  args: {
    brandLogo: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930',
    actions: [
      { element: <Icon name="comment" />, },
      { element: <Icon name="notification" />, },
      { element: <Icon name="settings" />, },
      { element: <Icon name="help_desk" />,  },
      { element: <div style={{height: '30px', width: '50px', columnGap: '3px'}} className='flex w-[50px] gap-x-[3px] h-[30px] items-center'>
        <span style={{borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='bg-c1 w-full text-white  h-full items-center justify-center flex rounded-[50%]'>SP</span>
        <Icon name="drop_down"/>
    </div>  },
    ],
    theme: 'gray',
    className: '',
  },
  render: (args) => (
    <Navbar {...args} />
  ),
};

export const DefaultNavbar: Story = {
  args: {
    brandLogo: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930',
    actions: [
        { element: 'Home', text: 'Home' },
        { element: 'About', text: 'About' },
        { element: 'Contact', text: 'Contact' },
    ],
    theme: 'gray',
    className: '', 
  },
};
