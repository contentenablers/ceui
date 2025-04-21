import React from 'react';
import Divider from '../lib/common/Divider/Divider';


export default {
  title: 'Common/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Defines the divider orientation.',
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Defines the divider style.',
    },
    thickness: {
      control: 'select',
      options: ['thin', 'medium', 'semi_thick', 'thick', 'extra_thick'],
      description: 'Defines the thickness of the divider.',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'gray', 'dark_gray', 'light_gray', 'black'],
      description: 'Defines the color of the divider.',
    },
    label: {
      control: 'text',
      description: 'Optional label text displayed in the middle of the divider.',
    },
    position: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Defines the alignment of the divider label.',
    },
    padding: {
      control: 'text',
      description: 'Defines padding around the divider for spacing control.',
    },
  },
};

// 🔹 Horizontal Dividers
export const HorizontalSolid = () => (
  <>
    <p>Introduction to React</p>
    <Divider orientation="horizontal" variant="solid" thickness="medium" color="gray" />
    <p>React is a JavaScript library for building user interfaces.</p>
  </>
);

export const HorizontalWithLabel = () => (
  <>
    <p>Getting Started</p>
    <Divider orientation="horizontal" variant="solid" thickness="medium" color="primary" label="Introduction" />
    <p>React was created by Facebook and is maintained by a large community.</p>
  </>
);

export const HorizontalDashed = () => (
  <>
    <p>JSX Syntax</p>
    <Divider orientation="horizontal" variant="dashed" thickness="semi_thick" color="secondary" />
    <p>JSX allows you to write HTML directly inside JavaScript code.</p>
  </>
);

// 🔹 Vertical Dividers
export const VerticalWithParentHeight = () => (
    <div style={{ display: 'flex', gap:1,alignItems: 'center', height: '30px' }}>
      <div style={{   }}>
        <p>Frontend</p>
      </div>
  
      <Divider orientation="vertical" variant="solid" thickness="thin" color="black" />
  
      <div style={{  }}>
        <p>Backend</p>
      </div>
    </div>
  );
  


// 🔹 Extra Examples
export const ExtraThickPrimary = () => (
  <>
    <p>Advanced Concepts</p>
    <Divider orientation="horizontal" variant="solid" thickness="extra_thick" color="primary" />
    <p>Topics include context API, hooks, and performance optimization.</p>
  </>
);

export const ThinGrayDivider = () => (
  <>
    <p>Step 1: Install React</p>
    <Divider orientation="horizontal" variant="solid" thickness="thin" color="gray" />
    <p>Step 2: Create a Component</p>
  </>
);

export const DividerWithPadding = () => (
  <>
    <p>Chapter 1: Introduction</p>
    <Divider orientation="horizontal" variant="solid" thickness="medium" color="black" padding="16px 0" label="Key Concepts" />
    <p>Chapter 2: Components</p>
  </>
);
