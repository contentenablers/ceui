// Table.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {Table} from '../lib/common'; 
import { within, userEvent,fireEvent  } from '@storybook/testing-library';
import { expect } from '@storybook/jest';



const meta: Meta<typeof Table>={
  title: 'Common/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes:{
    onSort: { action: 'sorted'},
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// const Template: Story<TableProps> = (args) => <Table {...args} />;
// Helper function to verify sorting
// Function to verify sorting
const verifySorting = async (canvas: HTMLElement, sortOrder: 'asc' | 'desc', columnIndex: number) => {
  const rows = within(canvas).getAllByRole('row');
  const data = rows.slice(1).map(row => {
    const cells = within(row).getAllByRole('cell');
    return cells[columnIndex].textContent?.trim() || '';
  });

  const isSorted = data.every((item, idx, arr) => {
    if (idx === 0) return true;
    const prevItem = arr[idx - 1];
    return sortOrder === 'asc' ? item >= prevItem : item <= prevItem;
  });
  
  expect(isSorted).toBe(true);
};
export const Normal:Story = {
    args : {
  TableHead: [
    { name: "ID", config: { sort: true, type: "number" } },
    { name: "Name", config: { sort: false, type: "string" } },
    { name: "Age", config: { sort: true, type: "number" } },
    { name: "Email", config: { sort: false, type: "string" } },
    { name: "Join Date", config: { sort: true, type: "date" } },
    { name: "Status", config: { sort: true, type: "string" } }
  ],
  TableData: [
    [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
    [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
    [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
    [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
    [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
    [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"]
  ],
}
}




export const SortByAge: Story = {
  args: {
    TableHead: [
      { name: "ID", config: { sort: true, type: "number" } },
      { name: "Name", config: { sort: false, type: "string" } },
      { name: "Age", config: { sort: true, type: "number" } },
      { name: "Email", config: { sort: false, type: "string" } },
      { name: "Join Date", config: { sort: true, type: "date" } },
      { name: "Status", config: { sort: true, type: "string" } }
    ],
    TableData: [
      [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
      [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
      [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
      [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
      [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
      [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"]
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const ageHeader = await canvas.getByRole('columnheader', { name: /Age/i });
  
    await userEvent.click(ageHeader);

    await new Promise((resolve) => setTimeout(resolve, 500)); 

    await verifySorting(canvasElement, 'asc', 2);

    await fireEvent.click(ageHeader);

    await new Promise((resolve) => setTimeout(resolve, 500)); 

    await verifySorting(canvasElement, 'desc', 2);
  },
};


export const TableWithCustomTableStyle: Story = {
    args: {
      TableHead: [
        { name: "ID", config: { sort: true, type: "number" } },
        { name: "Name", config: { sort: false, type: "string" } },
        { name: "Age", config: { sort: true, type: "number" } },
        { name: "Email", config: { sort: false, type: "string" } },
        { name: "Join Date", config: { sort: true, type: "date" } },
        { name: "Status", config: { sort: true, type: "string" } }
      ],
      TableData: [
        [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
        [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
        [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
        [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
        [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
        [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"]
      ],
    }
  };

  export const TableWithCustomHeaderStyle: Story = {
    args: {
      TableHead: [
        { name: "ID", config: { sort: true, type: "number" } },
        { name: "Name", config: { sort: false, type: "string" } },
        { name: "Age", config: { sort: true, type: "number" } },
        { name: "Email", config: { sort: false, type: "string" } },
        { name: "Join Date", config: { sort: true, type: "date" } },
        { name: "Status", config: { sort: true, type: "string" } }
      ],
      TableData: [
        [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
        [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
        [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
        [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
        [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
        [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"]
      ],
      headerStyle: { backgroundColor: '#f0f0f0', fontWeight: 'bold', color: '#333' },
    }
  };

  export const TableWithCustomCellStyle: Story = {
    args: {
      TableHead: [
        { name: "ID", config: { sort: true, type: "number" } },
        { name: "Name", config: { sort: false, type: "string" } },
        { name: "Age", config: { sort: true, type: "number" } },
        { name: "Email", config: { sort: false, type: "string" } },
        { name: "Join Date", config: { sort: true, type: "date" } },
        { name: "Status", config: { sort: true, type: "string" } }
      ],
      TableData: [
        [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
        [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
        [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
        [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
        [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
        [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"]
      ],
      cellStyle: { backgroundColor: '#e9f5f9', color: '#333', textAlign: 'center' },
    }
  };

  
  export const TableWithAllCustomStyles: Story = {
    args: {
      TableHead: [
        { name: "ID", config: { sort: true, type: "number" } },
        { name: "Name", config: { sort: false, type: "string" } },
        { name: "Age", config: { sort: true, type: "number" } },
        { name: "Email", config: { sort: false, type: "string" } },
        { name: "Join Date", config: { sort: true, type: "date" } },
        { name: "Status", config: { sort: true, type: "string" } }
      ],
      TableData: [
        [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
        [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
        [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
        [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
        [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
        [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"]
      ],
      headerStyle: { backgroundColor: '#f0f0f0', fontWeight: 'bold', color: '#333', fontSize: '16px' },
      cellStyle: { backgroundColor: '#e9f5f9', color: '#333', textAlign: 'center', padding: '10px' },
    }
  };
  
  export const TableWithPaginationAndRoundedCorners: Story = {
    args: {
      TableHead: [
        { name: "ID", config: { sort: true, type: "number" } },
        { name: "Name", config: { sort: false, type: "string" } },
        { name: "Age", config: { sort: true, type: "number" } },
        { name: "Email", config: { sort: false, type: "string" } },
        { name: "Join Date", config: { sort: true, type: "date" } },
        { name: "Status", config: { sort: true, type: "string" } }
      ],
      TableData: [
        [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
        [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
        [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
        [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
        [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
        [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"]
      ],
      itemsPerPage: 2,
      enablePagination: true,
      rounded: true,
    }
  };

  
  export const TableWithPaginationDisabledAndRoundedCorners: Story = {
    args: {
      TableHead: [
        { name: "ID", config: { sort: true, type: "number" } },
        { name: "Name", config: { sort: false, type: "string" } },
        { name: "Age", config: { sort: true, type: "number" } },
        { name: "Email", config: { sort: false, type: "string" } },
        { name: "Join Date", config: { sort: true, type: "date" } },
        { name: "Status", config: { sort: true, type: "string" } }
      ],
      TableData: [
        [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
        [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
        [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
        [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
        [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
        [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"]
      ],
      enablePagination: false,
      rounded: true,
 
    }
  };
  
  export const TableWithPaginationAndNoRoundedCorners: Story = {
    args: {
      TableHead: [
        { name: "ID", config: { sort: true, type: "number" } },
        { name: "Name", config: { sort: false, type: "string" } },
        { name: "Age", config: { sort: true, type: "number" } },
        { name: "Email", config: { sort: false, type: "string" } },
        { name: "Join Date", config: { sort: true, type: "date" } },
        { name: "Status", config: { sort: true, type: "string" } }
      ],
      TableData: [
        [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
        [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
        [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
        [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
        [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
        [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"]
      ],
      itemsPerPage: 3,
      enablePagination: true,
      rounded: false,
     
    }
  };
  
  export const TableWithPagination: Story = {
    args: {
      TableHead: [
        { name: "ID", config: { sort: true, type: "number" } },
        { name: "Name", config: { sort: false, type: "string" } },
        { name: "Age", config: { sort: true, type: "number" } },
        { name: "Email", config: { sort: false, type: "string" } },
        { name: "Join Date", config: { sort: true, type: "date" } },
        { name: "Status", config: { sort: true, type: "string" } }
      ],
      TableData: [
        [1, "John Doe", 30, "john.doe@example.com", "2022-01-15", "Active"],
        [2, "Jane Smith", 25, "jane.smith@example.com", "2023-03-22", "Inactive"],
        [3, "Sam Johnson", 40, "sam.johnson@example.com", "2021-11-30", "Active"],
        [4, "Lisa Brown", 35, "lisa.brown@example.com", "2022-07-19", "Pending"],
        [5, "Mike Davis", 50, "mike.davis@example.com", "2020-09-12", "Active"],
        [6, "Emily Wilson", 29, "emily.wilson@example.com", "2023-05-05", "Inactive"],
        [7, "Chris Martin", 31, "chris.martin@example.com", "2021-12-21", "Active"],
        [8, "Amanda Lee", 28, "amanda.lee@example.com", "2022-06-17", "Pending"],
        [9, "Steven Harris", 45, "steven.harris@example.com", "2020-02-28", "Active"],
        [10, "Nina Adams", 33, "nina.adams@example.com", "2023-01-12", "Inactive"],
        [11, "Robert Taylor", 38, "robert.taylor@example.com", "2021-09-10", "Active"],
        [12, "Olivia Brown", 27, "olivia.brown@example.com", "2022-11-05", "Pending"],
        [13, "Jacob Wilson", 42, "jacob.wilson@example.com", "2020-10-23", "Active"],
        [14, "Sophia Anderson", 26, "sophia.anderson@example.com", "2023-02-18", "Inactive"],
        [15, "David Martinez", 37, "david.martinez@example.com", "2021-06-30", "Active"],
        [16, "Isabella Garcia", 32, "isabella.garcia@example.com", "2022-08-21", "Pending"],
        [17, "Daniel Rodriguez", 28, "daniel.rodriguez@example.com", "2020-07-10", "Active"],
        [18, "Mia Thompson", 34, "mia.thompson@example.com", "2023-03-05", "Inactive"],
        [19, "James White", 39, "james.white@example.com", "2021-12-01", "Active"],
        [20, "Charlotte Evans", 31, "charlotte.evans@example.com", "2022-04-15", "Pending"],
        [21, "William Lewis", 45, "william.lewis@example.com", "2020-05-20", "Active"],
        [22, "Amelia Walker", 29, "amelia.walker@example.com", "2023-01-25", "Inactive"],
        [23, "Matthew Young", 36, "matthew.young@example.com", "2021-08-12", "Active"],
        [24, "Liam Hill", 32, "liam.hill@example.com", "2022-09-18", "Pending"],
        [25, "Evelyn Allen", 27, "evelyn.allen@example.com", "2020-06-05", "Active"],
        [26, "Alexander Scott", 33, "alexander.scott@example.com", "2023-04-20", "Inactive"],
        [27, "Ava Mitchell", 30, "ava.mitchell@example.com", "2021-11-12", "Active"],
        [28, "Benjamin Adams", 42, "benjamin.adams@example.com", "2022-07-09", "Pending"],
        [29, "Ella Johnson", 35, "ella.johnson@example.com", "2020-08-15", "Active"],
        [30, "Lucas Green", 28, "lucas.green@example.com", "2023-02-01", "Inactive"],
        [31, "Mason Carter", 41, "mason.carter@example.com", "2021-12-05", "Active"],
        [32, "Harper Brown", 29, "harper.brown@example.com", "2022-06-30", "Pending"],
        [33, "Elijah Martinez", 36, "elijah.martinez@example.com", "2020-03-18", "Active"],
        [34, "Abigail Lee", 32, "abigail.lee@example.com", "2023-05-10", "Inactive"],
        [35, "James Williams", 38, "james.williams@example.com", "2021-10-23", "Active"],
        [36, "Grace Robinson", 31, "grace.robinson@example.com", "2022-12-05", "Pending"],
        [37, "Henry Wilson", 44, "henry.wilson@example.com", "2020-09-12", "Active"],
        [38, "Lily Hall", 27, "lily.hall@example.com", "2023-03-15", "Inactive"],
        [39, "Owen Walker", 34, "owen.walker@example.com", "2021-11-30", "Active"],
        [40, "Zoe Evans", 30, "zoe.evans@example.com", "2022-08-25", "Pending"],
        [41, "Leo Clark", 36, "leo.clark@example.com", "2020-05-18", "Active"],
        [42, "Nora Lee", 28, "nora.lee@example.com", "2023-01-10", "Inactive"],
        [43, "Jack Brown", 43, "jack.brown@example.com", "2021-09-15", "Active"],
        [44, "Chloe Lewis", 32, "chloe.lewis@example.com", "2022-11-12", "Pending"],
        [45, "Sebastian Wilson", 37, "sebastian.wilson@example.com", "2020-06-25", "Active"],
        [46, "Mila Harris", 29, "mila.harris@example.com", "2023-02-20", "Inactive"],
        [47, "Wyatt Thompson", 31, "wyatt.thompson@example.com", "2021-10-05", "Active"],
        [48, "Luna Garcia", 27, "luna.garcia@example.com", "2022-05-15", "Pending"],
        [49, "Isaac Martinez", 39, "isaac.martinez@example.com", "2020-04-28", "Active"],
        [50, "Ella Davis", 30, "ella.davis@example.com", "2023-06-30", "Inactive"]
      ],
      itemsPerPage: 5,
      enablePagination: true,
      rounded: true,
      align:"center"

    }
  };
  