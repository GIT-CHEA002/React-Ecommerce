import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginateModule from "react-paginate";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const ReactPaginate = ReactPaginateModule.default;
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1); // react-paginate is 0-based
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <span className="flex items-center space-x-1">
          <span>Next</span> <ChevronRight size={16} />
        </span>
      }
      previousLabel={
        <span className="flex items-center space-x-1">
          <ChevronLeft size={16} /> <span>Prev</span>
        </span>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={0}
      pageCount={totalPages}
      forcePage={currentPage - 1}
      containerClassName="flex space-x-2"
      pageClassName="px-3 py-1 rounded cursor-pointer text-sm"
      activeClassName="bg-blue-100 text-blue-900 font-semibold"
      disabledClassName="opacity-30 cursor-not-allowed"
    />
  );
}
