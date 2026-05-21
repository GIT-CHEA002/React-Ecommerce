import axios from "axios";
const API_URL = "https://dummyjson.com/users/add";
export default async function registerUser(userData) {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error.response?.data?.message || "Fail");
  }
}
