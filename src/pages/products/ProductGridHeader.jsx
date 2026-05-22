import { ChevronDown } from "lucide-react";

export default function ProductGridHeader() {
  return (
    <div className="sticky top-0 left-0 z-30  w-full bg-white">
      <div className="pb-6 block space-y-3 md:space-y-0 md:flex items-center justify-between">
        <div>
          <h1 className="text-blue-900 text-lg md:text-3xl font-semibold">
            Curated Collection
          </h1>
          <p className="text-gray-600 text-sm">
            Discover items tailored to your refined taste.
          </p>
        </div>
        <div className="flex space-x-3 items-center">
          <label htmlFor="sort-option" className="text-nowrap">
            Sort by:
          </label>
          <div className="relative w-fit min-w-[160px]">
            <select
              name="sort-option"
              id="sort-option"
              className="w-full bg-white text-gray-700 text-sm font-medium  px-4 py-2.5 pr-10 border border-gray-300 rounded-lg shadow-sm cursor-pointer outline-none appearance-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all duration-200"
            >
              <option value="recommend">Recommend</option>
              <option value="feature">Feature</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
            {/* Custom Chevron Arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
              <ChevronDown className=" align-middle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
