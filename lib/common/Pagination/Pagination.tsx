import React from 'react';
import '../../styles.css';

interface PaginationProps {
    countPerPage: number;
    totalCount: number;
    currentPage: number;
    position: string;
    variant?: 'default' | 'minimal'; // Default full pagination or minimal variant
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    countPerPage,
    totalCount,
    currentPage,
    position,
    variant = 'default', // Default pagination style
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalCount / countPerPage);

    // Handle page change safely
    const handlePageChange = (e: React.MouseEvent, page: number) => {
        e.preventDefault();
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    // Generate pagination numbers
    const getPaginationNumbers = () => {
        const pages: (number | string)[] = [];
        let startPage = 1;
        let endPage = totalPages;

        if (totalPages > 6) {
            if (currentPage <= 3) {
                endPage = 4;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }

            if (startPage > 1) {
                pages.push(1);
                if (startPage > 2) pages.push('...');
            }
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) pages.push('...');
                pages.push(totalPages);
            }
        } else {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }
        return pages;
    };

    if (variant === 'minimal') {
        return (
            <div className="flex flex-col items-center justify-center py-2">
                <div className="flex space-x-2">
                    {totalPages === 1 ? (
                        <div className="w-16 h-2 bg-blue-900 rounded-full"></div> // Only 1 page
                    ) : currentPage === 1 ? (
                        <>
                            <div className="w-12 h-2 bg-blue-900 rounded-full"></div> {/* Big Line (Page 1) */}
                            {totalPages > 1 && (
                                <div className="w-8 h-2 bg-gray-300 rounded-full cursor-pointer" onClick={() => onPageChange(2)}></div>
                            )} {/* Small Line (Page 2) */}
                            {totalPages > 2 && <div className="w-2 h-2 bg-gray-300 rounded-full" onClick={() => onPageChange(3)}></div>} {/* Dot (Page 3) */}
                        </>
                    ) : currentPage === totalPages ? (
                        <>
                            {totalPages > 2 && <div className="w-2 h-2 bg-gray-300 rounded-full" onClick={() => onPageChange(totalPages - 2)}></div>} {/* Dot (Page n-2) */}
                            {totalPages > 1 && (
                                <div className="w-8 h-2 bg-gray-300 rounded-full cursor-pointer" onClick={() => onPageChange(totalPages - 1)}></div>
                            )} {/* Small Line (Page n-1) */}
                            <div className="w-12 h-2 bg-blue-900 rounded-full"></div> {/* Big Line (Current last page) */}
                        </>
                    ) : (
                        <>
                            <div className="w-8 h-2 bg-gray-300 rounded-full cursor-pointer" onClick={() => onPageChange(currentPage - 1)}></div> {/* Small (Prev) */}
                            <div className="w-12 h-2 bg-blue-900 rounded-full"></div> {/* Big (Current) */}
                            <div className="w-8 h-2 bg-gray-300 rounded-full cursor-pointer" onClick={() => onPageChange(currentPage + 1)}></div> {/* Small (Next) */}
                        </>
                    )}
                </div>
                {/* Show Current Page */}
                <p className="mt-2 text-sm font-medium text-gray-700">Page {currentPage} of {totalPages}</p>
            </div>
        );
    }
    
    
    

    // Default Full Pagination
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    onClick={(e) => handlePageChange(e, currentPage - 1)}
                    className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
                        currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'
                    }`}
                >
                    Previous
                </a>
                <a
                    href="#"
                    onClick={(e) => handlePageChange(e, currentPage + 1)}
                    className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
                        currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'
                    }`}
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage - 1) * countPerPage + 1}</span> to{' '}
                        <span className="font-medium">{Math.min(currentPage * countPerPage, totalCount)}</span> of{' '}
                        <span className="font-medium">{totalCount}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <a
                            href="#"
                            onClick={(e) => handlePageChange(e, currentPage - 1)}
                            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                                currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                        >
                            <span className="sr-only">Previous</span>
                            &lt;
                        </a>
                        {getPaginationNumbers().map((page, index) => (
                            <React.Fragment key={index}>
                                {page === '...' ? (
                                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                        ...
                                    </span>
                                ) : (
                                    <a
                                        href="#"
                                        onClick={(e) => handlePageChange(e, page as number)}
                                        aria-current={currentPage === page ? 'page' : undefined}
                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                            currentPage === page
                                                ? 'bg-indigo-600 text-white'
                                                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                                        } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                    >
                                        {page}
                                    </a>
                                )}
                            </React.Fragment>
                        ))}
                        <a
                            href="#"
                            onClick={(e) => handlePageChange(e, currentPage + 1)}
                            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                                currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                        >
                            <span className="sr-only">Next</span>
                            &gt;
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
