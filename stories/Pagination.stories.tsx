import React, { useState } from 'react';
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

// Wrapper component for state management
const PaginationWrapper = ({ countPerPage, totalCount, position, variant }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      countPerPage={countPerPage}
      totalCount={totalCount}
      currentPage={currentPage}
      position={position}
      variant={variant}
      onPageChange={(page) => {
        console.log(`Page changed to: ${page}`);
        setCurrentPage(page);
      }}
    />
  );
};

// **Story: Default Pagination**
export const Default: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    countPerPage: 5,
    totalCount: 100,
    position: 'Start',
    variant: 'default',
  },
};

// **Story: Minimal Pagination**
export const Minimal: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    countPerPage: 5,
    totalCount: 20,
    position: 'Start',
    variant: 'minimal',
  },
};



