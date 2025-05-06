import type { Preview } from "@storybook/react";
import "./preview.css"; // 👈 Import the custom CSS

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
