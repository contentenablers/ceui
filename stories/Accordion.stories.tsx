import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../lib/common/Accordion";

const meta = {
  title: "Common/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomBackground: Story = {
  args: {
    icon: <span>▶</span>,
    iconPosition: "end",
    width: "700px",
    className: "p-4",
    items: [
      {
        header: (
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="font-semibold">Chapter 1: Introduction</div>
              <div className="text-gray-500 text-sm">2 hrs - 8 lessons</div>
            </div>
            <span className="text-gray-500 text-sm">30% completed</span>
          </div>
        ),
        content: <p>Content for Chapter 1</p>,
      },
      {
        header: (
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="font-semibold">Chapter 2: Basics</div>
              <div className="text-gray-500 text-sm">2 hrs - 8 lessons</div>
            </div>
            <span className="text-gray-500 text-sm">60% completed</span>
          </div>
        ),
        content: <p>Content for Chapter 2</p>,
      },
      {
        header: (
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="font-semibold">Chapter 3: Hydropower</div>
              <div className="text-gray-500 text-sm">2 hrs - 6 lessons</div>
            </div>
            <span className="text-green-600 text-sm">100% completed</span>
          </div>
        ),
        content: <p>Content for Chapter 3</p>,
      },
    ],
  },
};

export const WithFrontIcon: Story = {
  args: {
    icon: <span>▶</span>,
    iconPosition: "start",
    width: "700px",
    className: "p-4",
    items: CustomBackground.args.items,
  },
};

export const WithBackIcon: Story = {
  args: {
    icon: <span>▶</span>,
    iconPosition: "end",
    width: "700px",
    className: "p-4",
    items: CustomBackground.args.items,
  },
};

export const FadeAnimation: Story = {
  args: {
    ...CustomBackground.args,
    animation: "fade",
  },
};

export const SlideAnimation: Story = {
  args: {
    ...CustomBackground.args,
    animation: "slide",
  },
};

export const ScaleAnimation: Story = {
  args: {
    ...CustomBackground.args,
    animation: "scale",
  },
};

export const HeightTransition: Story = {
  args: {
    ...CustomBackground.args,
    animation: "height",
  },
};

export const BounceEffect: Story = {
  args: {
    ...CustomBackground.args,
    animation: "bounce",
  },
};
export const SlideEffect: Story = {
  args: {
    ...CustomBackground.args,
    animation: "slide-height",
  },
};
