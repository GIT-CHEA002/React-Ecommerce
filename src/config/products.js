import axios from "axios";
export default async function fetchProduct() {
  try {
    const API_URL = "https://dummyjson.com/products";
    const response = await axios.get(API_URL);
    console.log(response.data.products);
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();
