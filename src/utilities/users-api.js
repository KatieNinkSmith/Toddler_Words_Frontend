// TODO: we are using fetch here and can update to axios later
// ** set up the base url for the route
const LOCAL_URL = "http://localhost:5050";
const DEPLOY_URL = "https://toddler-words-backend.onrender.com";
const API_URL = "/api/users";
const URL = DEPLOY_URL + API_URL;

// ** sign up function
export async function signUp(userData) {
  // fetch uses an options object as a second arg to make requests other then basic GET requests, include data, headers, ect
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // fetch requires data payloads to be stringified and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // check is request was successful
  if (res.ok) {
    // eventually, res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}

// ** login function
export async function login(credentials) {
  console.log(credentials);
  const res = await fetch(URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  console.log(res);
  // check if successful
  if (res.ok) {
    // this will resolve to the JWT
    return res.json();
  } else {
    throw new Error("Invalid Log In");
  }
}
