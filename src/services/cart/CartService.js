import axios from "axios";

export const getAllCart = async (user) => {
  try {
    if (user) {
      const url = `https://dummyjson.com/carts/user/${user.id}`;
      const response = await axios.get(url);
      console.log(response.data.carts[0]);
      return response.data.carts[0];
    }
  } catch (error) {
    console.log(error);
  }
  return 0;
};
export const getTotalCartNumber = async (user) => {
  try {
    if (user) {
      const url = `https://dummyjson.com/carts/user/${user.id}`;
      const response = await axios.get(url);
      const totalItems = response.data.carts[0]?.products.length || 0;
      return totalItems;
    }
  } catch (error) {
    console.log(error);
  }
};
