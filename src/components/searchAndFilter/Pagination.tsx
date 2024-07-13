const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  setCurrentPage,
}) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
      setCurrentPage(page);
    }
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`px-3 py-2 rounded-md text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            currentPage === i ? "bg-gray-200 font-bold" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const prevButtonDisabled = currentPage === 1;
  const nextButtonDisabled = currentPage === totalPages;
  return (
    <div className="flex justify-center mt-4">
      <button
        className={`disabled:opacity-50 px-3 py-2 rounded-md text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          prevButtonDisabled ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={prevButtonDisabled}
      >
        Previous
      </button>
      {renderPages()}
      <button
        className={`disabled:opacity-50 px-3 py-2 rounded-md text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          nextButtonDisabled ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={nextButtonDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
