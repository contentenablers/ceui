import type { Meta, StoryObj } from "@storybook/react";
import { IconButton, Icon } from "../lib/common";
import IconsList from "../lib/common/Icon/IconsList";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof IconButton> = {
  title: "Common/Icon/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(IconsList), // Available icons
      description: "Select the icon to render.",
    },
    size: {
      control: { type: "number", min: 16, max: 100, step: 4 },
      description: "Size of the icon in pixels.",
    },
    className: {
      control:false,
      description: "Custom class for styling.",
    },
    onClick: { action: "clicked" },
  },
  parameters: { 
    layout: "centered",
    docs: {
      description: {
        story: "This is an `IconButton` component that allows you to display an icon within a clickable button. You can customize the icon size and appearance using the provided props, It also supports interaction through the `onClick` action. Below are a few examples showcasing different icon sizes and styles.",
      },
    },
   }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Helper Function to Create Icon Stories
const createStory = (
  name: keyof typeof IconsList,
  size: number,
  className: string
): Story => ({
  args: {
    name,
    size,
    className,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.getByRole("button");
    await userEvent.click(icon);
  },
});

/**
 * Showcases different icons in various sizes.
 * Icon colors are based on the CEUI theme ( c1, c2 )
 */
export const Primary = createStory("search", 24, "");
export const Secondary = createStory("audio", 50, "bg-c4");
