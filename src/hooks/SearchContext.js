import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  return React.createElement(
    SearchContext.Provider,
    {
      value: {
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
      },
    },
    children,
  );
}
