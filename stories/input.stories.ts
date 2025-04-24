import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../lib/common'; // Import your Input component
import { InputList } from '../lib/common/Input/InputList';


const meta: Meta<typeof Input> = {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom CSS class to style the input.',
      defaultValue: '',
    },
    onChange: {
      action: 'onChange',
      description: 'Function to call when the input value changes.',
    },
    variant: {
      control: 'select',
      options: Object.keys(InputList),
      description: 'Choose the input style (e.g., default).',
      defaultValue: 'default',
    },
    name: {
      control: 'text',
      description: 'Name of the input area (for accessibility).',
      defaultValue: 'input',
    },
    value: {
      control: 'text',
      description: 'The current value of the input.',
      defaultValue: 'Default Text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input.',
      defaultValue: false,
    },
    placeholder: {
      control: 'text',
      description: 'Text that appears when the input is empty.',
    },
    prefix: {
      control:false,
      description: 'Prefix af the input area (e.g., $icon).',
    },
    suffix: {
      control:false,
      description: 'Suffix af the input area (e.g., $icon/$chip).',
    }
  },
  
};

export default meta;

type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    value: 'Default Text',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
    variant: 'default',
    name: 'defaultInput',
  },
};


export const DisabledInput: Story = {
  args: {
    name: 'disabledInput',
    value: 'Disabled',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
    variant: 'default',
    disabled: true, 
    placeholder: 'This input is disabled',
  },
};


export const InputWithPlaceholder: Story = {
  args: {
    name: 'tooltipInput',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
    variant: 'default',
    placeholder: 'InputWithPlaceholder',
  },
  parameters: {
    docs: {
      description: {
        story: 'This input has a tooltip-like placeholder text that can be used to guide users.',
      },
    },
  },
};

