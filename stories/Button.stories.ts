import type { Meta, StoryObj } from "@storybook/react";
import { Button, Icon, IconsList } from "../lib/common";
import { userEvent, within } from "@storybook/test";
import { sizes, variants } from "../lib/common/Button/ButtonThemeList";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
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
      options: Object.keys(variants),
      description: "Choose the button style (e.g., primary, secondary).",
    },
    startIcon: {
      control: "select",
      options: Object.keys(IconsList), // Available icons
      description: "Icon to display at the start (left) of the button.",
    },
    endIcon: {
      control: "select",
      options: Object.keys(IconsList), // Available icons
      description: "Icon to display at the end (right) of the button.",
    },
    iconArgs: {
      control: "object",
      description:
        "Custom properties for the icon component (e.g., color, size).",
    },
    size: {
      options: Object.keys(sizes),
      control: "select",
      description: "Select the button size (small, medium, large).",
    },
    children: {
      control: "text",
      description: "Text or content inside the button.",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button, preventing interaction.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", {
      name: /Primary Button/i,
    });
    await userEvent.click(button);
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: "secondary-outline",
    children: "Secondary Outline with Search Button",
    startIcon: "search",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", {
      name: /Secondary Outline with Search Button/i,
    });
    await userEvent.click(button);
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true,
  },
};
