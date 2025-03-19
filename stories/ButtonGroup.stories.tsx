import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "../lib/common";
// import { userEvent, within } from "@storybook/test";
import { SIZE, BUTTON_GROUP_VARIANT } from "../lib/utils/ThemeList";

const meta: Meta<typeof ButtonGroup> = {
  title: "Common/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control:false,
      description: "Custom CSS class to style the button.",
    },
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked.",
    },
    variant: {
      control: "select",
      options: Object.keys(BUTTON_GROUP_VARIANT),
      description: "Choose the button style (e.g., primary, secondary).",
    },
    size: {
      options: Object.keys(SIZE),
      control: "select",
      description: "Select the button size (small, medium, large).",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    buttonsArgs: [
      {
        children: "My Course",
        className:'px-4 py-2'
      },
      {
        children: "Course Template",
        className:'px-4 py-2'
      }
    ]
  },
};


