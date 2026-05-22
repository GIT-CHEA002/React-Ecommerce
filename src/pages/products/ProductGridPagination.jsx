import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fragment } from "react";

export default function ProductGridPagination({
  setCurrentPage,
  currentPage,
  productToDisplay,
}) {
  const totalPages = Math.ceil(productToDisplay.length / 6);
  return (
    <Fragment>
      {totalPages >= 1 && (
        <div className="sticky flex items-center justify-center pt-5 bottom-0 bg-white  left-0  z-30 ">
          <div className="flex justify-center items-center space-x-6  text-blue-900 font-medium">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className="flex items-center space-x-1 disabled:opacity-30"
            >
              <ChevronLeft size={16} /> <span>Prev</span>
            </button>
            <span className="text-gray-500 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-1 disabled:opacity-30"
            >
              <span>Next</span> <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
