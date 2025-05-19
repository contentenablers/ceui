import type { Meta, StoryObj } from '@storybook/react';
import { Model, Input} from '../lib/common';
import React, { useState } from 'react';
const meta: Meta<typeof Model> = {
  title: 'Components/Model',
  component: Model,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
  },
  parameters: { 
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Model>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
      setIsOpen(false);
      args.onClose?.(); // triggers Storybook action
    };

    return (
      <>
        <button onClick={handleOpen}>Open Modal</button>
        <Model
          {...args}
          isOpen={isOpen}
          onClose={handleClose}
          bgColor="bg-white"
          content={
            <>
              <p>This is a sample modal content.</p>
              <Input placeholder="Enter your name" variant='default' />
              <br/>
              <Input placeholder="Enter your name" variant='default' />
            </>
          }
        />
      </>
    )
  },
  args: {
    title: 'Sample Modal Title',
    content: <p>This is a sample modal content.</p>,
    buttons: [
      {
        children: 'Close',
        onClick: () => alert('Close clicked'),
        variant: 'primary', // assuming variant prop
      },
      {
        children: 'Save',
        onClick: () => alert('Close clicked'),
        variant: 'primary', // assuming variant prop
      },
    ],
    width: 'w-[500px]',
    height: 'auto',
    bgColor: 'bg-white',
    outsideClick: true,
    className: '',
  },
};

