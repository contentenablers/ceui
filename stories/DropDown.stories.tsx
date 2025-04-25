import type { Meta, StoryObj } from "@storybook/react";
import { DropDown } from "../lib/common";
import { SELECT_BOX_VARIANT } from "../lib/utils/ThemeList";

const meta: Meta<typeof DropDown> = {
  title: "Common/DropDown",
  component: DropDown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs:{
      description:{
        component: `A dropdown menu component that takes a label and an array of items to display, based on the variant.`
      }
    }
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'The selected value to display on the dropdown button.',
    },
    items: {
      control: 'object',
      defaultValue: [
        { label: 'Edit',value: 'E' },
        { label: 'Duplicate',value: 'D' },
        { label: 'Archive', value: 'A' },
        { label: 'Delete',value: 'D' },
      ],
      description: 'The items to render in the dropdown menu.',
    },
    variant:{
      control:'select',
      options:Object.keys(SELECT_BOX_VARIANT),
      description: 'The variant of the dropdown menu. Can be one of ' + Object.keys(SELECT_BOX_VARIANT).join(', '),
    },
    className:{
      control:false,
      description: 'Additional CSS classes to apply to the dropdown menu.',

    },
    onClick: {
      action: "clicked",
      description: "Function to call when the dropdown item is clicked.",
    },
  },
  
};

export default meta;

type Story = StoryObj<typeof DropDown>;

export const Default: Story = {
  args: {
    value: 'Options',
    onClick: (e: { label: string }) => alert(`${e.label} clicked`),
    items: [
      { label: 'Edit', value: 'E' },
      { label: 'Duplicate', value: 'D' },
      { label: 'Archive', value: 'A' },
      { label: 'Delete', value: 'D' },
    ],
  },
};

