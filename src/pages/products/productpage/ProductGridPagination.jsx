import { Fragment } from "react";
import Pagination from "../../../components/shared/Pagination";

export default function ProductGridPagination({
  setCurrentPage,
  currentPage,
  totalPages,
}) {
  return (
    <Fragment>
      {totalPages >= 1 && (
        <div className="sticky flex items-center justify-center pt-5 bottom-0 bg-white  left-0  z-30 ">
          <div className="flex justify-center items-center text-blue-900 font-medium">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
}
