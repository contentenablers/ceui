import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../lib/common'; // Adjust import path as needed

const meta: Meta<typeof Pagination> = {
  title: 'Common/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Dummy function to handle page changes
const handlePageChange = (page: number) => {
  console.log(`Page changed to: ${page}`);
  
};

export const Normal: Story = {
  args: {
    countPerPage: 5,
    position: "Start",
    totalCount: 100,
    currentPage: 1,
    onPageChange: handlePageChange, // Add the onPageChange handler here
  },
};
