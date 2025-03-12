import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconButton } from "../lib/common";
import IconsList from "../lib/common/Icon/IconsList";

const meta: Meta<typeof Icon> = {
  title: "Common/Icon",
  component: Icon,
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
  },
  parameters: { 
    layout: "centered",
    docs: {
      description: {
        story: "The stories below showcase how different icons look at varying sizes and with different styles.",
      },
    },
   },
};

export default meta;
type Story = StoryObj<typeof Icon>;

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
});

/**
 * Showcases different icons in various sizes.
 * Icon colors are based on the CEUI theme ( c1, c2 )
 */
export const Primary = createStory("search", 24, "");
export const Secondary = createStory("audio", 50, "bg-c4");
