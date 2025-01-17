// TODO: we are using fetch here and can update to axios later
// ** set up the base url for the route
const LOCAL_URL = "http://localhost:5050";
const API_URL = "/api/words";
const URL = LOCAL_URL + API_URL;

export async function createWord(formData) {
  // fetch uses an options object as a second arg to make requests other then basic GET requests, include data, headers, ect
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // fetch requires data payloads to be stringified and assigned to a body property on the options object
    body: JSON.stringify(formData),
  });
  // check is request was successful
  if (res.ok) {
    // eventually, res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error("Invalid word create");
  }
}

// export async function login(credentials) {
//   console.log(credentials)
//   const res = await fetch(URL + "/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(credentials),
//   });
//   console.log(res)
//   // check if successfuk
//   if (res.ok) {
//     // this will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error("Invalid Log In");
//   }
// }
