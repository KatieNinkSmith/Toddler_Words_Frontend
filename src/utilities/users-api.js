// ** set up the base url for the route
const LOCAL_URL = "http://localhost:5050";
const DEPLOY_URL = "https://toddler-words-backend.onrender.com";
const API_URL = "/api/users";
const URL = DEPLOY_URL + API_URL;

// ** sign up function
export async function signUp(userData) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}

// ** login function
export async function login(credentials) {
  const res = await fetch(URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Log In");
  }
}
