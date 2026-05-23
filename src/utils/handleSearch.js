import axios from "axios";
export const handleSearch = async (term, setSearchTerm, setSearchResults) => {
  try {
    setSearchTerm(term);
    if (term.trim() !== "") {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${term}`,
      );
      setSearchResults(response.data.products);
    } else {
      setSearchResults([]);
    }
  } catch (error) {
    console.log(error);
  }
};
