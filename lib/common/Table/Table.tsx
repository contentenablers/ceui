import React, { useState, useMemo } from "react";
import "./Table.css";
import '../../styles.css';
import Pagination from '../Pagination';  

interface Config {
  sort: boolean;
  type: 'number' | 'string' | 'date';
}

interface TitleItem {
  name: string;
  config: Config;
}

type TableDataArray<T> = T[][];

interface TableProps {
  TableHead: TitleItem[];
  TableData: TableDataArray<number | string | Date>;
  headerStyle?: React.CSSProperties;
  cellStyle?: React.CSSProperties;
  itemsPerPage?: number;
  enablePagination?: boolean;
  rounded?: boolean;
  containerStyle?: React.CSSProperties;
  align?: 'left' | 'center' | 'right'; 
  onSort?: (columnIndex: number, direction: 'asc' | 'desc') => void;
}

const Table: React.FC<TableProps> = ({ 
  TableHead, 
  TableData, 
  headerStyle, 
  cellStyle, 
  itemsPerPage = 10, 
  enablePagination = false, 
  rounded = false,
  containerStyle = {},
  align = 'center',
  onSort
}) => {
    // Validate TableHead
    if (!Array.isArray(TableHead) || TableHead.some(item => !item.name || !item.config || !['number', 'string', 'date'].includes(item.config.type))) {
      throw new Error("Invalid TableHead format");
    }
  
    // Validate TableData
    if (!Array.isArray(TableData) || TableData.some(row => !Array.isArray(row) || row.length !== TableHead.length)) {
      throw new Error("Invalid TableData format");
    }
  
  const [sortConfig, setSortConfig] = useState<{ key: number; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const convertToDateIfNeeded = (value: number | string | Date, type: 'number' | 'string' | 'date'): number | string | Date => {
    if (type === 'date' && typeof value === 'string') {
      const parsedDate = new Date(value);
      return isNaN(parsedDate.getTime()) ? value : parsedDate;
    }
    return value;
  };

  const processedData = useMemo(() => {
    return TableData.map(row => 
      row.map((cell, index) => convertToDateIfNeeded(cell, TableHead[index].config.type))
    );
  }, [TableData, TableHead]);

  const sortedData = useMemo(() => {
    if (sortConfig !== null) {
      const { key, direction } = sortConfig;
      return [...processedData].sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        switch (TableHead[key].config.type) {
          case 'number':
            if (typeof aValue === 'number' && typeof bValue === 'number') {
              return direction === 'asc' ? aValue - bValue : bValue - aValue;
            }
            break;
          case 'string':
            if (typeof aValue === 'string' && typeof bValue === 'string') {
              return direction === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
            }
            break;
          case 'date':
            if (aValue instanceof Date && bValue instanceof Date) {
              return direction === 'asc'
                ? aValue.getTime() - bValue.getTime()
                : bValue.getTime() - aValue.getTime();
            }
            break;
          default:
            return 0;
        }
        return 0;
      });
    }
    return processedData;
  }, [processedData, sortConfig, TableHead]);

  const handleHeaderClick = (index: number) => {
    if (TableHead[index].config.sort) {
      const newDirection = sortConfig?.key === index && sortConfig.direction === 'asc' ? 'desc' : 'asc';
      setSortConfig({ key: index, direction: newDirection });
      if (onSort) {
        onSort(index, newDirection); 
      }
    }
  };

  const formatCellValue = (value: number | string | Date, type: 'number' | 'string' | 'date') => {
    try {
      if (type === 'date' && value instanceof Date) {
        return value.toLocaleDateString();
      }
      if (type === 'number' && typeof value === 'number') {
        return value.toLocaleString();
      }
      return value.toString();
    } catch (error) {
      console.error("Error formatting cell value:", error);
      return value.toString();
    }
  };

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    if (!enablePagination) {
      return sortedData;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, itemsPerPage, enablePagination]);


  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={`table-container ${rounded ? 'rounded-lg overflow-hidden' : ''}`} style={{borderRadius: rounded ? '8px' : '0', ...containerStyle }}>
      <table className={`w-full border-collapse bg-white`}>
        <thead>
          <tr>
            {TableHead.map((item, index) => (
              <th
                key={index}
                onClick={() => handleHeaderClick(index)}
                className={`py-3.5 px-3 border-b border-gray-300 ${item.config.sort ? 'cursor-pointer hover:bg-gray-100' : ''}`}
                style={{ ...headerStyle, textAlign: align }}
              >
                {item.name}
                {sortConfig?.key === index ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex} className={'bg-white'}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-3 py-4 border-b border-gray-300" style={{ ...cellStyle, textAlign: align }}>
                  {formatCellValue(cell, TableHead[cellIndex].config.type)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {enablePagination && totalPages > 1 && (
        <Pagination
          countPerPage={itemsPerPage}
          totalCount={sortedData.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          position="bottom"
        />
      )}
    </div>
  );
};

export default Table;
