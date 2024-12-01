import React, {useState} from "react";

const SmartPagination = () => {
    const [currentPagePagination, setCurrentPagePagination] = useState(1);

    const totalPageNumber = 50;

    const handlePreviousPagination = () => {
        if (currentPagePagination > 1) {
            setCurrentPagePagination((prev) => prev - 1);
        }
    };

    const handleNextPagination = () => {
        if (currentPagePagination < totalPageNumber) {
            setCurrentPagePagination((prev) => prev + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPagePagination(pageNumber);
    };

    const renderPageNumbersForPagination = () => {
        const pageNumbers = [];
        const startPage = Math.max(2, currentPagePagination - 1);
        const endPage = Math.min(
            totalPageNumber - 1,
            currentPagePagination + 1
        );

        pageNumbers.push(
            <PageButton
                key={1}
                pageNumber={1}
                isActive={currentPagePagination === 1}
                onClick={handlePageClick}
            />
        );

        if (startPage > 2) {
            pageNumbers.push(
                <span key="start-dots" className="mx-1 px-2 text-gray-500">
          ...
        </span>
            );
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <PageButton
                    key={i}
                    pageNumber={i}
                    isActive={currentPagePagination === i}
                    onClick={handlePageClick}
                />
            );
        }

        if (endPage < totalPageNumber - 1) {
            pageNumbers.push(
                <span key="end-dots" className="mx-1 px-2 text-gray-500">
          ...
        </span>
            );
        }

        pageNumbers.push(
            <PageButton
                key={totalPageNumber}
                pageNumber={totalPageNumber}
                isActive={currentPagePagination === totalPageNumber}
                onClick={handlePageClick}
            />
        );

        return pageNumbers;
    };
    
    return (
        <div
            className="flex items-center justify-center flex-col sm:flex-row mt-8 sm:space-x-4 space-y-4 sm:space-y-0 md:space-y-4 py-7">

            <button
                onClick={handlePreviousPagination}
                disabled={currentPagePagination === 1}
                className={`px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors duration-300 ${
                    currentPagePagination === 1
                        ? "bg-gray-200 !text-gray-400 cursor-not-allowed"
                        : ""
                }`}
            >
                Previous
            </button>
            <div className="flex gap-[5px] sm:gap-[8px]">
                {renderPageNumbersForPagination()}
            </div>
            <button
                onClick={handleNextPagination}
                disabled={currentPagePagination === totalPageNumber}
                className={`px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors duration-300 ${
                    currentPagePagination === totalPageNumber
                        ? "bg-gray-200 !text-gray-400 cursor-not-allowed"
                        : ""
                }`}
            >
                Next
            </button>

        </div>
    );
};

export default SmartPagination;

// page button
const PageButton = ({ pageNumber, isActive, onClick }) => (
    <button
        onClick={() => onClick(pageNumber)}
        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
            isActive
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white"
        }`}
    >
        {pageNumber}
    </button>
);
