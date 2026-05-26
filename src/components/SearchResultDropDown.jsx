import { Search } from "lucide-react";
import { useSearch } from "../hooks/SearchContext";

export default function SearchResultDropDown() {
  const { searchTerm, searchResults, setSearchTerm } = useSearch();

  if (!searchResults || searchResults.length === 0 || !searchTerm.trim()) {
    return null;
  }

  return (
    <div className="absolute w-full md:w-fit left-0 md:left-[40%] top-36 md:top-20 mt-1 max-h-80 overflow-y-auto bg-white border border-gray-200 shadow-2xl z-50 divide-y divide-gray-100 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {searchResults.map((product) => (
        <div
          key={product.id || product._id}
          className="p-3 hover:bg-gray-50 cursor-pointer transition-colors flex flex-col"
          onClick={() => {
            setSearchTerm(product.name);
          }}
        >
          <div className="flex items-center gap-2.5">
            {/* YouTube Style Search Lens Icon */}
            <Search size={12} className="text-gray-600" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 truncate">
                {product.name}
              </h4>
              <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                {product.description && product.description.length > 50
                  ? `${product.description.slice(0, 50)}.....`
                  : product.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
