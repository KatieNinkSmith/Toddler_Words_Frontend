import axios from "axios";

const LOCAL_URL = "http://localhost:5050";
const API_URL = "/api/users";
const URL = LOCAL_URL + API_URL;

async function makeApiCall(endpoint, method, body) {
  try {
    const res = await axios({
      method,
      url: endpoint,
      data: body,
    });
    return res.data; // Axios automatically wraps response data in `data`
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
}

// Function for signing up a user
export async function signUp(userData) {
  return makeApiCall(URL, "POST", userData);
}

// Function for logging in a user
export async function login(credentials) {
  return makeApiCall(URL + "/login", "POST", credentials);
}

export async function addWords(formData) {
  return makeApiCall(URL + `/${formData.userId}/addWords`, "POST", formData);
}
