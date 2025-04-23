import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import List from '../lib/common/List';

const meta: Meta<typeof List> = {
  title: 'Common/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof List>;

// ✅ Simple List with Prefix & Suffix
export const SimpleList: Story = {
  args: {
    items: [
      { 
        title: 'Item 1', 
        description: 'This is a simple list item', 
        // prefix: <span>✔️</span>, 
        suffix: <span>▶️</span> 
      },
      { 
        title: 'Item 2', 
        description: 'Another item in the list', 
        // prefix: <span>✔️</span>, 
        suffix: <span>▶️</span> 
      },
    ],
  },
};

// ✅ List with Nested Sublists
export const ListWithSublist: Story = {
  args: {
    items: [
      { 
        title: 'Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1Main Item 1', 
        description: 'Has sub-items', 
        prefix: <span>✔️</span>, 
        // suffix: <span>▶️</span>,
        sublist: [
          { title: 'Sub Item A', prefix: <span>✔️</span> ,
            sublist: [
                { title: 'Sub Item A', prefix: <span>✔️</span> },
                { title: 'Sub Item B', prefix: <span>✔️</span> },
              ],
          },
          { title: 'Sub Item B', prefix: <span>✔️</span> },
        ],
      },
      { 
        title: 'Main Item 2', 
        description: 'Another parent item', 
        prefix: <span>✔️</span>, 
        // suffix: <span>▶️</span>,
        sublist: [
          { title: 'Sub Item C', prefix: <span>✔️</span> },
        ],
      },
    ],
  },
};

// ✅ Long title with Ellipsis Handling
export const EllipsisList: Story = {
  args: {
    items: [
      { 
        title: 'This is a very long list item that should be truncated when the width is small', 
        description: 'This description will also be truncated', 
        prefix: <span>✔️</span>, 
        // suffix: <span>▶️</span> 
      },
      { 
        title: 'Another long title example for testing ellipsis in small containers', 
        description: 'Check if this works properly', 
        prefix: <span>✔️</span>, 
        // suffix: <span>▶️</span> 
      },
    ],
  },
};

// ✅ Clickable Check Icon in Prefix
export const ClickableCheckList: Story = {
  args: {
    items: [
      { 
        title: 'Task 1', 
        // description: 'Click the check icon to mark as done', 
        prefix: <button onClick={() => alert('Checked!')}>✔️</button>, 
        // suffix: <span>▶️</span> 
      },
      { 
        title: 'Task 2', 
        // description: 'Try clicking the check icon', 
        prefix: <button onClick={() => alert('Checked!')}>✔️</button>, 
        // suffix: <span>▶️</span> 
      },
    ],
  },
};

// ✅ Interactive List with Play Button
export const InteractivePlayList: Story = {
  args: {
    items: [
      { 
        title: 'Song 1', 
        description: 'Click play to start', 
        // prefix: <span>🎵</span>, 
        suffix: <button onClick={() => alert('Playing!')}>▶️</button> 
      },
      { 
        title: 'Song 2', 
        description: 'Another song to play', 
        // prefix: <span>🎵</span>, 
        suffix: <button onClick={() => alert('Playing!')}>▶️</button> 
      },
    ],
  },
};
