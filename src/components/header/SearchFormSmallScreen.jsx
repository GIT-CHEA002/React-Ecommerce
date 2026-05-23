import { useContext } from "react";
import { FaX } from "react-icons/fa6";
import { SearchContext } from "../../hooks/SearchContext";
import { handleSearch } from "../../utils/handleSearch";
export default function SearchFormSmallScreen({
  isSearchFormOpen,
  setisSearchFormOpen,
}) {
  const { setSearchTerm, searchResults, setSearchResults } = useContext(SearchContext);
  return (
    <div>
      {isSearchFormOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white border-t shadow-md px-6 py-4 transition-all duration-1000">
          <form className="flex gap-2 items-center">
            <input
              type="text"
              onChange={(event) => {
                handleSearch(
                  event.target.value,
                  setSearchTerm,
                  setSearchResults,
                );
                console.log("Search results:", searchResults);
              }}
              placeholder="search products..."
              className="flex-1 border-2 rounded px-3 py-2 text-sm bg-gray-100 border-gray-300 outline-none focus:border-blue-600 transition-colors duration-300"
            />

            <button
              type="submit"
              className="px-4 py-2 border border-blue-600 rounded text-sm text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Find
            </button>
            <FaX
              onClick={() => {
                setisSearchFormOpen(!isSearchFormOpen);
              }}
            />
          </form>
        </div>
      )}
    </div>
  );
}
