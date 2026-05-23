import { ChevronRight } from "lucide-react";

export default function SideBar({
  sideBarOpen,
  selectedCategory,
  getSelectedCategory,
}) {
  const sidebarLinkClass = (isActive) => {
    return `flex justify-between p-2 rounded-lg text-blue-900 hover:bg-blue-300 active:font-semibold transition-all duration-300 cursor-pointer
                            ${isActive ? "bg-blue-200" : ""}`;
  };
  return (
    <aside
      // className={`pt-12  z-50 md:block md:sticky top-20 w-fit md:w-[260px] h-[calc(100vh-120px)] ${sideBarOpen ? "block" : "hidden"} `}
      className={`
                  fixed inset-y-0 top-12 left-0 z-40 w-[260px] bg-white p-6 pt-12 border-r border-gray-100 transition-transform duration-300 ease-in-out md:transform-none md:z-10 md:block md:sticky md:top-0 md:h-full md:border-r-0
                  ${sideBarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                `}
    >
      <h1 className="text-gray-600  text-sm font-semibold">CATEGORYS</h1>
      <ul className="px-3 space-y-2 mt-3 border-b border-gray-400 pb-5">
        {["all", "fragrances", "groceries", "furniture", "beauty"].map(
          (cat) => {
            const isActive = selectedCategory === cat;
            return (
              <li
                key={cat}
                className={sidebarLinkClass(isActive)}
                onClick={() => getSelectedCategory(cat)}
              >
                <span>{cat === "all" ? "All Products" : cat}</span>
                <ChevronRight />
              </li>
            );
          },
        )}
      </ul>
      <div className="border-b border-gray-400 pt-2 pb-8">
        <h1 className="text-blue-900 text-sm font-semibold">PRICE RANGES</h1>
        <div className="px-5">
          <input
            type="range"
            name=""
            id=""
            className="w-full h-1 rounded-lg  accent-blue-900 "
          />
          <div className="flex justify-between mt-1 appearance-none text-blue-900 font-semibold">
            <span>$0</span>
            <span>$1000+</span>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <h1 className="text-blue-900 text-sm font-semibold pb-1">RATINGS</h1>
        <div className="text-gray-600">
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className=" px-2 ">
            4 Stars & Above
          </label>
        </div>
        <div className="text-gray-600">
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className=" px-2 ">
            3 Stars & Above
          </label>
        </div>
      </div>
    </aside>
  );
}
