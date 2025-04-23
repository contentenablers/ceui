
import type { Meta, StoryObj } from "@storybook/react";
import { LazyImage } from '../lib/common';

const meta: Meta<typeof LazyImage> = {
  title: 'Common/LazyImage',
  component: LazyImage, 
  tags: ["autodocs"],
  argTypes: {
    src: { 
      control: 'text',
      description: 'The source URL for the image. This is the main image URL that will be loaded when the image enters the viewport.'
    },
    alt: { 
      control: 'text',
      description: 'The alt text for the image, which provides accessibility information.'
    },
    srcSet: { 
      control: 'text',
      description: 'A string of comma-separated image sources for responsive image loading based on screen size and resolution (e.g., "image1 1x, image2 2x").'
    },
    sizes: { 
      control: 'text',
      description: 'A string of media query conditions used to define how much space the image will take up on different screen sizes. Used in conjunction with `srcset`.'
    },
    width: { 
      control: 'text',
      description: 'The width of the image. Accepts string values like "100%" or specific pixel values like "600px".'
    },
    height: { 
      control: 'text',
      description: 'The height of the image. Accepts string values like "auto" or specific pixel values like "400px".'
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `LazyImage is a React component that lazily loads images. It supports responsive images with 'srcset' and 'sizes', ensuring optimal image loading for various screen sizes and resolutions. It also supports placeholder images while the actual image is loading for a better user experience.`
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LazyImage>;


export const Default: Story = {
    args: {
      src: 'https://assets.contentenablers.com/storefront_stg/imgs/ce_new_logo_skill_comp.webp?imwidth=750',
      alt: 'Lazy Loaded Image',
      width: '100%',
      height: 'auto',
    },
  };
  
  
