import type { Meta, StoryObj } from "@storybook/react";
import { Button, IconsList, SkillButton } from "../lib/common";
import { userEvent, within } from "@storybook/test";
import { SIZE, BUTTON_VARIANT } from "../lib/utils/ThemeList";

const meta: Meta<typeof SkillButton> = {
  title: "Common/SkillButton",
  component: SkillButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: { control: false },
    onClick: { action: "clicked" },
    variant: {
      control: "select",
      options: Object.keys(BUTTON_VARIANT),
    },
    startIcon: {
      control: "select",
      options: Object.keys(IconsList),
    },
    endIcon: {
      control: "select",
      options: Object.keys(IconsList),
    },
    iconArgs: {
      control: "object",
    },
    size: {
      control: "select",
      options: Object.keys(SIZE),
    },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof SkillButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Blank Course",
    startIcon:"comment"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", {
      name: /Primary Button/i,
    });
    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const ImportButton: Story = {
  args: {
    variant: "import",
    children: "Import",
    startIcon:"comment",
  },
};

export const TertiaryButton: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary Action",
  },
};

export const OutlineSecondary: Story = {
  args: {
    variant: "secondary-outline",
    children: "Search with Outline",
    startIcon: "search",
  },
};

export const SmallButton: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Small Size",
  },
};



export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true,
  },
};

export const LargeWithCustomStyle: Story = {
  args: {
    variant: "secondary",
    size: "large",
    children: "Styled Large Button",
    startIcon: "settings",
    style: {
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
  },
};
