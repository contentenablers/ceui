import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../lib/common";
import IconsList from "../lib/common/Icon/IconsList";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof Chip> = {
  title: "Common/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control:false,
      description: "Custom CSS class to style the chip.",
    },
    onClick: {
      action: "clicked",
      description: "Function to call when the chip is clicked.",
    },
    variant: {
      control: "select",
      options:['primary' ,'secondary' , 'navbar'],
      description: "Choose the chip style (e.g., primary, secondary).",
    },
    startIcon: {
      control: "select",
      options: Object.keys(IconsList), // Available icons
      description: "Icon to display at the start (left) of the chip.",
    },
    endIcon: {
      control: "select",
      options: Object.keys(IconsList), // Available icons
      description: "Icon to display at the end (right) of the chip.",
    },
    iconArgs: {
      control: "object",
      description:
        "Custom properties for the icon component (e.g., color, size).",
    },
  },
  parameters: { 
    layout: "centered",
    docs: {
      description: {
        component:`Chip is a clickable element that can display text and icons. It can have different styles (e.g., primary, secondary) and sizes (small, medium, large).`
      },
    },
   },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// Helper Function to Create Icon Stories
const createStory = (
 label:string,
  startIcon?:  keyof typeof IconsList,
): Story => ({
  args: {
    label,
    startIcon,
  },
});


export const Secondaryout: Story = {
  args: {
    label: "Default Chip",
    variant:'secondary',
    startIcon: "search",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = await canvas.getByRole("chip", {
      name: /Default Chip/i,
    });
    await userEvent.click(chip);
  },
};


/**
 * Showcases different icons in various sizes.
 * Icon colors are based on the CEUI theme ( c1, c2 )
 */
export const Primary = createStory("Strengths Assessment");
export const Secondary = createStory("Course Duration", "settings");
