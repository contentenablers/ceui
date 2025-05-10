import type { Meta, StoryObj } from "@storybook/react";
import { Navbar, DropDown, Icon, IconButton } from "../lib/common";
const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullWidth",
    docs: {
      description: {
        component:
          "Navbar is a component that displays a navigation bar with logo, search bar, and actions.",
      },
    },
  },
  argTypes: {
    className: {
      control: false,
      description: "Custom CSS class to style the navbar.",
      defaultValue: "",
    },
    theme: {
      control: "select",
      options: ["white", "gray"],
      description: "Navbar theme (light or dark).",
      defaultValue: "light",
    },
    brandLogo: {
      control: "text",
      description: "The logo image for the navbar.",
      defaultValue: "https://via.placeholder.com/150",
    },
    actions: {
      control: "object",
      description: "Array of links for the navbar.",
      defaultValue: [
        { element: "#", text: "Home" },
        { element: "#", text: "About" },
        { element: "#", text: "Contact" },
      ],
    },
    searchArgs: {
      control: false,
      description: "Props to pass to the search input component.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const WithIcons: Story = {
  args: {
    brandLogo:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
    actions: [
      { element: <IconButton name="comment" data-tooltip='Comment' data-position='bottom' /> },
      { element: <IconButton name="notification" data-tooltip='Notification' data-position='bottom' /> },
      { element: <IconButton name="settings" data-tooltip='Settings' data-position='bottom' /> },
      { element: <IconButton name="help_desk" data-tooltip='HelpDesk' data-position='bottom' /> },
      {
        element: (
          <DropDown
            value="SP"
            variant="rounded-primary"
            className="ceui-nav-story-dropdown"
            onClick={(e: { label: string }) => alert(`${e.label} clicked`) }
            items={[
              { label: "Profile",value:''},
              { label: "Login", value:'' },
              { label: "Logout",value:''},
            ]}
          />
        ),
      },
    ],
    theme: "white",
    className: "",
  },
  render: (args) => <Navbar {...args} />,
};

