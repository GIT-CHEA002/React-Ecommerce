import axios from "axios";
export default async function fetchProduct(
  url = "https://dummyjson.com/products",
) {
  try {
    const urlString = url;
    const response = await axios.get(urlString);
    const productsWithManyImages = response.data.products.filter(
      (product) => product.images.length > 1,
    );

    console.log(productsWithManyImages);
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();
