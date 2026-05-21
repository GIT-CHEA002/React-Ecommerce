import axios from "axios";
const API_URL = "https://dummyjson.com/auth/login";
export default async function loginUser(userData) {
  const { userName, password } = userData;
  try {
    const response = await axios.post(
      API_URL,
      {
        username: userName,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (response.data.accessToken) {
      localStorage.setItem("user_session", JSON.stringify(response.data));
      console.log(response.data);
    }
    return response.data;
  } catch (error) {
    console.log(error.response?.message || "Failed");
    throw error.response?.data?.message || "Authentication failed";
  }
}
