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
export const addNewCart = async (user, data) => {
  try {
    if (user) {
      const url = "https://dummyjson.com/carts/add";
      const response = await axios.post(url, {
        userId: user.id,
        products: [data],
      });
      console.log(response.status); // 201 = create success
      console.log(response.data);
      return response.data;
    } else return;
  } catch (error) {
    console.log(error);
  }
};
export const deleteCart = async (user, cartId) => {
  try {
    if (user) {
      const url = `https://dummyjson.com/carts/${cartId}`;
      const response = await axios.delete(url);
      console.log(response.status);
      console.log(response.data);
      return response.data;
    } else return;
  } catch (error) {
    console.log(error);
  }
};
