import { useContext, useState } from "react";
import SearchFormSmallScreen from "./SearchFormSmallScreen";
import NavigationLink from "./NavigationLink";
import { SearchContext } from "../../hooks/SearchContext";
export default function Header() {
  const [isSearchFormOpen, setisSearchFormOpen] = useState(false);
  const { cartTotal, setCartTotal } = useContext(SearchContext); // globale state
  return (
    <nav className="px-6 md:px-8 lg:px-12 py-6 fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <NavigationLink
        isSearchFormOpen={isSearchFormOpen}
        setisSearchFormOpen={setisSearchFormOpen}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
      <SearchFormSmallScreen
        isSearchFormOpen={isSearchFormOpen}
        setisSearchFormOpen={setisSearchFormOpen}
      />
    </nav>
  );
}
