import axios from "axios";

export const getProducts = async () => {
  try {
    const url = "https://dummyjson.com/products";
    const response = await axios.get(url);
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};
