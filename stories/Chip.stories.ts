import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../lib/common";
import { SIZE, CHIP_VARIANT } from "../lib/utils/ThemeList";
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
      options: Object.keys(CHIP_VARIANT),
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
    size: {
      options: Object.keys(SIZE),
      control: "select",
      description: "Select the chip size (small, medium, large).",
    }
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
  size: keyof typeof SIZE,
  startIcon?:  keyof typeof IconsList,
): Story => ({
  args: {
    label,
    size,
    startIcon,
  },
});

export const SecondaryOutline: Story = {
  args: {
    label: "Default Chip",
    variant:'default',
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
export const Primary = createStory("Shift+F", 'medium');
export const Secondary = createStory("Course Duration", 'medium', "settings");
