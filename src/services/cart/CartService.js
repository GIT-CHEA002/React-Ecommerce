import axios from "axios";

export const getAllCart = async (user) => {
  try {
    if (user) {
      const url = `https://dummyjson.com/carts/user/${user.id}`;
      const response = await axios.get(url);
      return response.data.carts;
    }
  } catch (error) {
    console.log(error);
  }
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
